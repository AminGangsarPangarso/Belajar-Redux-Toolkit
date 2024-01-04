import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    todos:["belajar","nonton"],
    todo : null,

}

export const todoSlice = createSlice({
    name :'todo',
    initialState,
    reducers:{
        setTodo :(state,action)=>{
            state.todos =action.payload
            console.log(action.payload)
        }
    }
})

export const {setTodo} = todoSlice.actions


export const fetchTodo =()=>{
    return async (dispatch) =>{
        await axios.get("http://localhost:3000/users/")
        .then((res)=>{
            dispatch(setTodo(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}