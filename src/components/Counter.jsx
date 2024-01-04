import { useSelector,useDispatch} from "react-redux"
import { increment ,dicrement,addMount} from "../features/counterSlice"

function Counter() {
    // const {counter} = useSelector((state)=>state.counterSlice)
    const counter = useSelector ((state)=>state.counterSlice.nilai)
    const dispatch = useDispatch()
    console.log(counter)
  

    const handleAddCounter =()=>{
      dispatch(increment())
    }
  return (
    <div>
        <h1>ini adalah counter</h1>
        <div className="">{counter}</div>
        <button className="bg-green-500 outline text-white px-2 " onClick={handleAddCounter}>tambah</button>
        <button className="bg-red-500 outline text-white px-2 " onClick={()=>dispatch(dicrement())}>kurang</button>
        <button className="bg-red-500 outline text-white px-2 " onClick={()=>dispatch(addMount(100))}>addmount </button>
    </div>

  )
}

export default Counter