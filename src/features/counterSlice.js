import {createSlice} from '@reduxjs/toolkit'

const initialState={
    nilai :100
    
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state)=>{
            state.nilai = state.nilai + 1
        },
        dicrement :(state)=>{
            state.nilai -=  1
        },
        addMount :(state,action)=>{
            state.nilai += action.payload
            console.log(action.payload)
        }
    }
})

export const {increment, dicrement,addMount}= counterSlice.actions
console.log(counterSlice)