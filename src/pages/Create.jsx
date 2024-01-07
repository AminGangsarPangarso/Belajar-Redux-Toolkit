import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchCreateTodo } from "../features/todoSlice"
import { useNavigate } from "react-router-dom"
function Create() {
  const navigate =useNavigate()
  const dispatch = useDispatch()
  const [name,setName] = useState("")
  const [deskripsi,setDeskripsi] =useState("")



  const handleSubmit = (e)=>{
    e.preventDefault()
   dispatch(fetchCreateTodo({name,deskripsi}))
   navigate("/")
    }
    
  
  return (
    <div>
      <div className="">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col w-60">
        <input className="outline mt-5" type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder=" masukan nama" />
        <input className="outline mt-5 mb-5" type="deskripsi" name="deskripsi" id="deskripsi" value={deskripsi} onChange={(e)=>setDeskripsi(e.target.value)} placeholder="masukan deskripsi" />
        <button className="px-2 py-2 bg-green-400" type="submit">  Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Create