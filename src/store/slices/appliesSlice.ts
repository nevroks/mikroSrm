import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IApply, IFunnel} from "../../types/types.ts";
type initialStatePropsType={
    applies:Array<IApply>
}
import {createFunnel} from "./funelSlice.ts";
const initialState:initialStatePropsType = {
    applies:[]
}

export const appliesSlice = createSlice({
    name: 'applies',
    initialState,
    reducers: {
        addApply:(state,{payload}:PayloadAction<IApply>)=>{
            console.log('asdad')
            state.applies.push(payload)

            createFunnel({name:'1',applies:[]})
        }
    },
})

// Action creators are generated for each case reducer function
export const { addApply } = appliesSlice.actions

export default appliesSlice.reducer