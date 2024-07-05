import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
export interface CounterState {
    counter: number
  }

const initialState: CounterState= {counter: 0}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state)=>{
            state.counter = state.counter + 1
        },
        decrement: (state)=>{
            state.counter = state.counter - 1
        },
        incrementByValue: (state, action: PayloadAction<number> ) =>{
            state.counter = state.counter + action.payload
        }
    }
})
export const {increment, decrement, incrementByValue} = counterSlice.actions

export default counterSlice.reducer
