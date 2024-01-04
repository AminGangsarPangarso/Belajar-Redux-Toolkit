import { createSlice } from "@reduxjs/toolkit";
import axios  from "axios";

const initialState ={
    users :[]
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        setUsers: (state,action)=>{
            state.users = action.payload
            console.log(action.payload)
        }
    }
})

export const {setUsers} = userSlice.actions

export function fetchUser (){
    return async (dispatch,getState)=>{
       await axios.get('http://localhost:3000/users/')
       .then((res)=>{
        dispatch(setUsers(res.data))
       }).catch((err)=>console.log(err))
    
    }
}

export const addUsers = () =>{
    return async (dispatch,getState) =>{
        await axios.post('http://localhost:3000/users/',{})
        .then((res)=>{
            console.log(setUsers(res.data))
        }).catch((err)=>console.log(err))
    }
}

