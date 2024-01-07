import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchTodo } from "../features/todoSlice"
import { Link } from "react-router-dom"
function Home() {

    const dispatch = useDispatch()

    const  todos=useSelector((state)=>state.todoSlice.todos)
    console.log(todos)

    useEffect(()=>{
        dispatch(fetchTodo())
    },[dispatch])
  return (
    <>
        <h1 className="text-3xl font-bold">Home</h1>
        <Link className="text-blue-500" to={"/create"}>/create</Link>
        {todos.map((todo)=>(
            <ul key={todo.id}>
                <div className="flex items-center">
                    {`${todo.id + 0}`}
                    <li>  {todo.name}</li>
                    <div className=" ml-5 ">

                    <Link className="text-blue-500" to={`/edit/${todo.id}`}>/edit</Link>
                    <Link className="text-blue-500" to={`/${todo.id}`}>/Detail</Link>
                    </div>
                </div>
            </ul>
        ))} 
    </>
  )
}

export default Home