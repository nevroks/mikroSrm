import React, {FC, useEffect, useMemo} from 'react';
import {Link} from "react-router-dom";
import {IFunnel} from "../../types/types.ts";
import {useAppSelector} from "../../hooks/ReduxHooks.ts";
import cn from "classnames";
import classes from "./style.module.css";

type FunnelItemPropsType={
   funnel:IFunnel
}

const FunnelItem:FC<FunnelItemPropsType> = ({funnel}) => {
    const currentFunnel=useAppSelector(state => state.currentFunnel.funnel)
    let summa=funnel.applies.reduce((sum,el)=>{
        return Number(sum) + Number(el.price)
    },0)
    const funnelClassName=useMemo(()=>{
        console.log("робит")
        const ss = cn(`${classes.funnel_item}`, {
            'active' : currentFunnel.name===funnel.name})
        console.log(ss)
        return ss
    },[currentFunnel])

    return (
        <div className={funnelClassName}>
            <Link to={`/${funnel.name}`}>{funnel.name}</Link> total:{summa}
        </div>
    );
};

export default FunnelItem;