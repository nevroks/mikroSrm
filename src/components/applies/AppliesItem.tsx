import {FC, useState} from 'react';
import {IApply, IFunnel} from "../../types/types.ts";
import Button from "../ui/button/Button.tsx";
import classes from "./style.module.css";
import PopUp from "../ui/popup/PopUp.tsx";
import ChangeApplyForm from "../forms/changeapplyform/changeApplyForm.tsx";

type AppliesItemPropsType={
    apply:IApply,
    funnel?:IFunnel
}

const AppliesItem:FC<AppliesItemPropsType> = ({apply,funnel}) => {
    const [isPopUpShown,setIsPopUpShown]=useState(false)

    return (
        <div>
            {isPopUpShown && <PopUp type={'popUp'} offerFunc={setIsPopUpShown}>
                <ChangeApplyForm apply={apply} funnel={funnel}/>
            </PopUp>}
            <div className={classes["AppliesItem__Stats"]}>
                <p>{apply.title}</p>
                <p>{apply.state}</p>
                <p>{apply.price}</p>
            </div>

            <Button onClick={()=>setIsPopUpShown(true)}>Редактировать</Button>
        </div>
    );
};

export default AppliesItem;