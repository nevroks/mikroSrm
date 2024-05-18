import {combineReducers, configureStore} from '@reduxjs/toolkit'
import funnelReducer from "./slices/funelSlice.ts"
import currentFunnelReducer from "./slices/currentFunnel.ts";

const reducers = combineReducers(
    {
        currentFunnel:currentFunnelReducer,
        funnel:funnelReducer,
    })
export const store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch