import React, {FC, useEffect, useRef, useState} from 'react';
import classes from "../../pages/mainpage/style.module.css";
import {IApply, IFunnel} from "../../types/types.ts";
import Button from "../ui/button/Button.tsx";
import AppliesItem from "../applies/AppliesItem.tsx";
import {changeApplyInFunnel} from "../../store/slices/funelSlice.ts";
import {useAppDispatch} from "../../hooks/ReduxHooks.ts";

type BoardPropsType={
    currentFunnel:IFunnel
}
type BoardArrayRowType={
    title:string,
    price:number,
    items:IApply[]
}
const Board:FC<BoardPropsType> = ({currentFunnel}) => {
    const dispatch=useAppDispatch()
    const [applies,setApplies]=useState<BoardArrayRowType[]>([])
    useEffect(()=>{
        const array:Array<BoardArrayRowType>=[
            {title:"new",price:0,items:[]},
            {title:"work",price:0,items:[]},
            {title:"payed",price:0,items:[]}
        ]

        currentFunnel.applies.forEach((apply)=>{
            for(let el of array){
                const boardTitle=el.title
                if (apply.state===boardTitle){
                    el.items.push(apply)
                }
            }
        })
        // setApplies(array)
        setApplies(array.map(row=>{

            let price=0
            if (row.items.length===0){
                return {...row,price: price}
            }

            if(row.items.length===1){
                console.log(row.items[0].price)
                price = row.items[0].price
                return {...row,price:price}
            }

            // price=row.items.reduce(function (sum,el){
            //     return Number(sum.price)+Number(el.price)})
            price=row.items.reduce((sum,el)=>{
                return Number(sum)+Number(el.price)
            },0)
            return {...row,price:price}
        }))
    },[currentFunnel])

    const [currentBoard,setCurrentBoard]=useState(null)
    const [currentItem,setCurrentItem]=useState(null)
    function dragOverHandler(event: React.DragEvent<HTMLDivElement>){
        event.preventDefault()
    }
    function dragLeaveHandler(event: React.DragEvent<HTMLDivElement>){
        // Здесь может быть стилизация
    }
    function dragStartHandler(event: React.DragEvent<HTMLDivElement>,apply,item){
        setCurrentBoard(apply)
        setCurrentItem(item)
    }
    function dragEndHandler(event: React.DragEvent<HTMLDivElement>){
        // Здесь может быть стилизация
    }
    function dropHandler(event: React.DragEvent<HTMLDivElement>,apply,item){
        event.preventDefault()
        event.stopPropagation()
        const currentIndex=currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex,1)
        const dropIndex=apply.items.indexOf(item)
        apply.items.splice(dropIndex+1,0,currentItem)
        // currentItem.state=apply.title
        setApplies(applies.map(a=>{
            if (a.title===apply.state){
                return apply
            }
            if (a.title===currentBoard.state){
                return currentBoard
            }
            return a
        }))
        const changedApply={...currentItem,state:apply.title}

        dispatch(changeApplyInFunnel({funnel:currentFunnel,apply:changedApply}))

    }

    function dropCardHandler(event: React.DragEvent<HTMLDivElement>, apply) {
        apply.items.push(currentItem)
        const currentIndex=currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex,1)
        setApplies(applies.map(a=>{
            if (a.title===apply.state){
                return apply
            }
            if (a.title===currentBoard.state){
                return currentBoard
            }
            return a
        }))
        const changedApply={...currentItem,state:apply.title}

        dispatch(changeApplyInFunnel({funnel:currentFunnel,apply:changedApply}))
    }

    return (
        <div>

            <div className={classes.boardList}>
                {applies.map(apply =>
                    <div
                        onDragOver={(event) => dragOverHandler(event)}
                        onDrop={(event) => dropCardHandler(event, apply)}
                        key={apply.title} className={classes.boardItem}>
                        <h1>{apply.title} total:{apply.price}</h1>
                        <div>{apply.items.map(item =>
                            <div
                                onDragOver={(event) => dragOverHandler(event)}
                                onDragLeave={(event) => dragLeaveHandler(event)}
                                onDragStart={(event) => dragStartHandler(event, apply, item)}
                                onDragEnd={(event) => dragEndHandler(event)}
                                onDrop={(event) => dropHandler(event, apply, item)}
                                draggable={true}
                                className={classes.boardItemTitle}
                                key={item.id}
                            ><AppliesItem funnel={currentFunnel} apply={item}/></div>
                        )}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Board;