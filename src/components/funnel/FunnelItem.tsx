import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {IFunnel} from "../../types/types.ts";

type FunnelItemPropsType={
   funnel:IFunnel
}

const FunnelItem:FC<FunnelItemPropsType> = ({funnel}) => {
    let summa=funnel.applies.reduce((sum,el)=>{
        return Number(sum) + Number(el.price)
    },0)
    return (
        <div>
            <Link to={`/${funnel.name}`}>{funnel.name}</Link> total:{summa}
        </div>
    );
};

export default FunnelItem;