import './App.css'
import Counter from './components/Counter'
import Navbar from './components/Navbar'
import User from './components/User'
function App() {


  return (
    <>
    <div className="">
      <Navbar/>
      <h1>Belajar Redux Toolkit</h1>
      <Counter/>
      <br />
      <hr />
      <User/>
    </div>
    </>
  )
}

export default App
