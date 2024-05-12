import Button from "../../ui/button/Button.tsx";
import {FormEvent, useState} from "react";
import Input from "../../ui/input/Input.tsx";
import {IFunnel} from "../../../types/types.ts";
import {useAppDispatch, useAppSelector} from "../../../hooks/ReduxHooks.ts";
import {createFunnel} from "../../../store/slices/funelSlice.ts";

const AddFunnelForm = () => {
    const dispatch=useAppDispatch()
    const funnels=useAppSelector(state => state.funnel.funnels)


    const [newFunnel,setNewFunnel]=useState<IFunnel>({
        name:'',
        total:0,
        applies:[]
    })
    const formHandler=(e:FormEvent)=>{
        e.preventDefault()

        if(funnels.find(funnel=>funnel.name===newFunnel.name)){

            alert("Не удалось создать воронку,так как воронка с таким наименованием уже существует")
            return
        }else{
            dispatch(createFunnel(newFunnel))
        }
    }
    return (
        <form>
            <Input onChange={e => setNewFunnel({...newFunnel,name:e.target.value})} value={newFunnel.name} placeholder={"Название"}/>
            <Button onClick={formHandler}>Создать</Button>
        </form>
    );
};

export default AddFunnelForm;