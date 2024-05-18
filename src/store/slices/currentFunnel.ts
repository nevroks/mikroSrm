import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFunnel} from "../../types/types.ts";
type initialStatePropsType={
    funnel:IFunnel
}

const initialState:initialStatePropsType = {
    funnel:{}
}

export const currentFunnelSlice = createSlice({
    name: 'currentFunnel',
    initialState,
    reducers: {
        setCurrentFunnel:(state,{payload}:PayloadAction<IFunnel>)=>{
            state.funnel=payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentFunnel } = currentFunnelSlice.actions

export default currentFunnelSlice.reducer