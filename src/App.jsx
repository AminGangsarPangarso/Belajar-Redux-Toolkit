import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
// import Counter from './components/Counter'
// import Navbar from './components/Navbar'
// import User from './components/User'
function App() {


  return (
    <>
    <div className="">
      {/* <Navbar/>
      <h1>Belajar Redux Toolkit</h1>
      <Counter/>
      <br />
      <hr />
      <User/> */}

      <h1>Todo App Redux Toolkit </h1>
      <RouterProvider router={router}/>
    
    </div>
    </>
  )
}

export default App
