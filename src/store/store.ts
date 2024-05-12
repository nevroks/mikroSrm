import {combineReducers, configureStore} from '@reduxjs/toolkit'
import funnelReducer from "./slices/funelSlice.ts"

const reducers = combineReducers(
    {
        funnel:funnelReducer,
    })
export const store = configureStore({
    reducer: reducers,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch