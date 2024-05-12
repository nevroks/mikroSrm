import React, {useMemo, useState} from 'react';
import Button from "../../components/ui/button/Button.tsx";
import PopUp from "../../components/ui/popup/PopUp.tsx";
import AddApplyForm from "../../components/forms/addapplyform/addApplyForm.tsx";
import {useParams} from "react-router-dom";
import {useAppSelector} from "../../hooks/ReduxHooks.ts";
import Board from "../../components/board/Board.tsx";

const FunnelPage = () => {
    const id=useParams()
    const funnels=useAppSelector(state => state.funnel.funnels)
    const [isPopUpShown,setIsPopUpShown]=useState(false)
    const currentFunnel=useMemo(()=>{
        return funnels.find(funnel => funnel.name === id.id);
    },[id,funnels])

    return (
        <div>
            {currentFunnel.name}
            <Button onClick={()=>setIsPopUpShown(true)}>Создать заявку</Button>
            {isPopUpShown&&<PopUp type={"popUp"} offerFunc={setIsPopUpShown}>
                <AddApplyForm currentFunnel={currentFunnel}/>
            </PopUp>}
            <Board currentFunnel={currentFunnel}/>
        </div>
    );
};

export default FunnelPage;