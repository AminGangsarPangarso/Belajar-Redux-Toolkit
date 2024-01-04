import { useSelector} from "react-redux"
function Navbar() {
    const counter = useSelector((state)=>state.counterSlice.nilai)
    // const dispatch = useDispatch()
  return (
    <div className="bg-gray-800 h-full">
        <div className=" text-white">
          <div className="flex  items-center">
            Navbar
          </div>
          <p className="">{counter}</p>
        </div>
    </div>
  )
}

export default Navbar