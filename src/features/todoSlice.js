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
        setTodos :(state,action)=>{
            state.todos =action.payload
            console.log(action.payload)
        },
        setTodo :(state,action)=>{
            state.todo=action.payload
        },
        editTodo :(state,action)=>{
            state.todo =action.payload
        }
    }
})

export const {setTodos,setTodo,editTodo} = todoSlice.actions


export const fetchTodo =()=>{
    return async (dispatch) =>{
        await axios.get("http://localhost:3000/users/")
        .then((res)=>{
            dispatch(setTodos(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const fetchDetailTodo =(id)=>{
    return async (dispatch)=>{
        await axios.get(`http://localhost:3000/users/${id}`)
        .then((res)=>{
            if(res.data){
                dispatch(setTodo(res.data))
            }else{
                console.log("tidak ada data")
            }
        }).catch((err)=>console.log(err))
    }
}

export const fetchCreateTodo = (payload)=>{
    return async ()=>{
        await axios.post("http://localhost:3000/users/",payload)
       .then((res)=>{
        res.data
       }).catch((err)=>{
        console.log(err,'data gagal ditambahkan ')
       })
    }
}

export const fetchEditTodo = (id,updateTodo)=>{
    return async ()=>{
        await axios.put(`http://localhost:3000/users/${id}`,updateTodo)
        .then((res)=>{
            res.data
        }).catch((err)=>{
            console.log(err,'data gagal di edit ')
        })
    }
}