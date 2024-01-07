import { useState  } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { fetchEditTodo } from "../features/todoSlice"


function Edit() {
  const [nameEdit,setNameEdit] = useState("")
  const [deskEdit,setDeksEdit] = useState("")
  const {id}=useParams()
  const dispatch = useDispatch()
  const  navigate = useNavigate()
  

  const handleEdit = (e)=>{
    e.preventDefault()

    dispatch(fetchEditTodo(id,{name:nameEdit,deskripsi:deskEdit}))
    navigate("/")
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Edit</h1>
      <div className="">
        <form action="" onSubmit={handleEdit}>
          <div className="flex flex-col w-60">
            <input className="outline mt-5 mb-5"  type="text" name="name" id="name" value={nameEdit} onChange={(e)=>setNameEdit(e.target.value)} />
            <input className="outline mt-5 mb-5"  type="text" name="name" id="name" value={deskEdit} onChange={(e)=>setDeksEdit(e.target.value)} />
            <button type="submit" className="px-2 py-2 bg-green-600 text-white">Edit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit