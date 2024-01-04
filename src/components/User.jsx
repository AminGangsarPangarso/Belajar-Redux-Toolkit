import { useSelector,useDispatch } from "react-redux"
import { fetchUser } from "../features/userSlice"


function User() {
    const {users} = useSelector((state)=>state.userSlice)
    const dispatch = useDispatch()

  return (
    <div>
        <div className="">
            <button className="bg-green-500 px-2 py-2" onClick={()=>dispatch(fetchUser())}> get api</button>
            <pre>{JSON.stringify(users,null,2)}</pre>
        </div>
    </div>
  )
}

export default User