import {FC, useMemo} from 'react';
import {Link} from "react-router-dom";
import {IFunnel} from "../../types/types.ts";
import {useAppSelector} from "../../hooks/ReduxHooks.ts";
import cn from "classnames";
import classes from "./style.module.css";

type FunnelItemPropsType = {
    funnel: IFunnel
}

const FunnelItem: FC<FunnelItemPropsType> = ({funnel}) => {
    const currentFunnel = useAppSelector(state => state.currentFunnel.funnel)
    const summa = useMemo(() => {
        return funnel.applies.reduce((sum, el) => {
            return Number(sum) + Number(el.price)
        }, 0)
    }, [(prevProps: FunnelItemPropsType, currentProps: FunnelItemPropsType) => {
        return JSON.stringify(prevProps) === JSON.stringify(currentProps)
    }])

    return (
        <div className={cn(`${classes["FunnelItem"]}`, {
            [classes.active]: currentFunnel.name === funnel.name
        })}>
            <Link to={`/${funnel.name}`}>{funnel.name}</Link> total:{summa}
        </div>
    );
};

export default FunnelItem;