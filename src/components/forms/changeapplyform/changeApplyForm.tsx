import React, {FC, useState} from 'react';
import Button from "../../ui/button/Button.tsx";
import {IApply, IFunnel} from "../../../types/types.ts";
import Input from "../../ui/input/Input.tsx";

import {useAppDispatch} from "../../../hooks/ReduxHooks.ts";
import {changeApplyInFunnel, deleteApplyFromFunnel} from "../../../store/slices/funelSlice.ts";

type ChangeApplyFormPropsType = {
    apply: IApply,
    funnel: IFunnel
}
const ChangeApplyForm: FC<ChangeApplyFormPropsType> = ({apply, funnel}) => {
    const dispatch = useAppDispatch()

    const [newApply, setNewApply] = useState<IApply>({
        id: apply.id,
        title: apply.title,
        description: apply.description,
        price: apply.price,
        state: apply.state

    })

    const handleChange = (e: InputEvent) => {
        e.preventDefault()
        dispatch(changeApplyInFunnel({funnel: funnel, apply: newApply}))
    }
    const handleDelete = (e: InputEvent) => {
        e.preventDefault()
        dispatch(deleteApplyFromFunnel({funnel: funnel, apply: apply}))
    }
    return (
        <form>
            <label>Название:
                <Input value={newApply.title}
                       onChange={e => setNewApply({...newApply, title: e.target.value})}
                       placeholder={`${newApply.title}`}/>
            </label>
            <label>Описание:
                <Input value={newApply.description}
                       onChange={e => setNewApply({...newApply, description: e.target.value})}
                       placeholder={`${newApply.description}`}/>
            </label>
            <label>Цена:
                <Input type={"number"} value={newApply.price}
                       onChange={e => setNewApply({...newApply, price: e.target.value})}
                       placeholder={`${newApply.price}`}/>
            </label>
            <Button onClick={handleChange}>Применить</Button>
            <Button onClick={handleDelete}>Удалить</Button>
        </form>
    );
};

export default ChangeApplyForm;