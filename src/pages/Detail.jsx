import { useEffect} from "react"
import { useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { fetchDetailTodo } from "../features/todoSlice"

import { Link } from "react-router-dom"

function Detail() {
  const dispatch = useDispatch()
  const {id} = useParams()

  const todo = useSelector((state)=>state.todoSlice.todo)

  console.log(todo)

   useEffect(()=>{
      dispatch(fetchDetailTodo(id))
   },[dispatch,id])

  return (
    <div>
      <h1 className="text-3xl font-bold">Detail</h1>
      <pre>
        {JSON.stringify(todo,null,52)}
      </pre>
      <Link to={"/"} className="text-blue-500">Back</Link>
    </div>
  )
}

export default Detail