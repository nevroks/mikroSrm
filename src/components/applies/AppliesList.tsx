import React, {FC} from 'react';
import {IApply} from "../../types/types.ts";
import AppliesItem from "./AppliesItem.tsx";

type AppliesItemPropsType={
    appliesArr:Array<IApply>
}

const AppliesList:FC<AppliesItemPropsType> = ({appliesArr}) => {
    return (
        <div>
            {appliesArr.map(apply=>{
                return <AppliesItem key={apply.id} apply={apply}/>
            })}
        </div>
    );
};

export default AppliesList;