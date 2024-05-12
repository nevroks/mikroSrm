import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFunnel} from "../../types/types.ts";
type initialStatePropsType={
    funnels:Array<IFunnel>
}

const initialState:initialStatePropsType = {
    funnels:[{
        name:"gay",
        total:0,
        applies:[
            {id:1, title:"Первая", description:"", price:10, state:"new"},{id:4, title:"Первая", description:"", price:10, state:"new"},
            {id:2, title:"Вторая", description:"", price:20, state:"work"},
            {id:3, title:"Третья", description:"", price:30, state:"payed"}
        ]}]
}

export const funnelSlice = createSlice({
    name: 'funnel',
    initialState,
    reducers: {
        createFunnel:(state,{payload}:PayloadAction<IFunnel>)=>{
            state.funnels.push(payload)
        },
        addApplyToFunnel:(state,{payload})=>{
            const currentFunnel=payload.funnel
            const apply=payload.apply
            const indexOfCurrentFunnel=state.funnels.findIndex(funnel => funnel.name === currentFunnel.name);
            const applyToAdd={id:state.funnels[indexOfCurrentFunnel].applies.length+1,...apply}
            state.funnels[indexOfCurrentFunnel].applies.push(applyToAdd)
        },
        changeApplyInFunnel:(state,{payload})=>{
            const currentFunnel=payload.funnel
            const apply=payload.apply
            const indexOfCurrentFunnel=state.funnels.findIndex(funnel => funnel.name === currentFunnel.name);
            const idOfApplyInFunnel=state.funnels[indexOfCurrentFunnel].applies.findIndex(applyInArr => applyInArr.id === apply.id)
            state.funnels[indexOfCurrentFunnel].applies.splice(idOfApplyInFunnel,1,apply)
        },
        deleteApplyFromFunnel:(state,{payload})=>{
            const currentFunnel=payload.funnel
            const apply=payload.apply
            const indexOfCurrentFunnel=state.funnels.findIndex(funnel => funnel.name === currentFunnel.name);
            const idOfApplyInFunnel=state.funnels[indexOfCurrentFunnel].applies.findIndex(applyInArr => applyInArr.id === apply.id)
            state.funnels[indexOfCurrentFunnel].applies.splice(idOfApplyInFunnel,1)
        }
    },
})

// Action creators are generated for each case reducer function
export const { createFunnel,addApplyToFunnel
    ,changeApplyInFunnel,deleteApplyFromFunnel } = funnelSlice.actions

export default funnelSlice.reducer