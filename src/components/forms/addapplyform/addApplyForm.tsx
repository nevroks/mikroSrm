import {FC, FormEvent, useState} from 'react';
import Input from "../../ui/input/Input.tsx";
import Button from "../../ui/button/Button.tsx";
import Select from "../../ui/select/Select.tsx";
import {IApply, IFunnel} from "../../../types/types.ts";
import {useAppDispatch} from "../../../hooks/ReduxHooks.ts";
import {addApplyToFunnel} from "../../../store/slices/funelSlice.ts";

type AddApplyFormPropsType={
    currentFunnel:IFunnel
}

const AddApplyForm:FC<AddApplyFormPropsType> = ({currentFunnel}) => {
    const dispatch=useAppDispatch()
    const [apply,setApply]=useState<IApply>({
        description:"",
        title:"",
        price:0
    })
    const [applyState,setApplyState]=useState("new")

    const formHandler=(e:FormEvent)=>{
        e.preventDefault()
        const applyToAdd={...apply,state:applyState}
        console.log(currentFunnel)
        dispatch(addApplyToFunnel({funnel:currentFunnel,apply:applyToAdd}))
    }
    return (
        <form>
           <Input value={apply.title} onChange={e => setApply({...apply,title:e.target.value})} placeholder={'Название'}/>
            <Input value={apply.description} onChange={e => setApply({...apply,description:e.target.value})} placeholder={'Описание'}/>
            <Input value={apply.price} onChange={e => setApply({...apply,price:e.target.value})} placeholder={'Сколько деняк'} type={'number'}/>
            <Select setSelectedAction={setApplyState} defaultValue={"Статус"} options={[
                {
                    name:'Новая заявка',
                    value:'new'
                },
                {
                    name:'В работе',
                    value:'work'
                },
                {
                    name:'Оплачено',
                    value:'payed'
                },
            ]}/>

            <Button onClick={formHandler}>Добавить</Button>
        </form>
    );
};

export default AddApplyForm;