import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchTodo } from "../features/todoSlice"
function Home() {

    const dispatch = useDispatch()

    const todos =useSelector((state)=>state.todoSlice.todos)
    console.log(todos)

    useEffect(()=>{
        dispatch(fetchTodo())
    },[dispatch])
  return (
    <div>
        <h1>Home</h1>
        {todos.map((todo)=>(
            <ul key={todo.id}>
                <div className="flex items-center">
                    <li>{todo.name}</li>
                    <li>{todo.deskripsi}</li>
                    <button>edit</button>
                    <button>hapus</button>
                </div>
            </ul>
        ))}
    </div>
  )
}

export default Home