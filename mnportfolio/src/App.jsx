import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Works } from './components/Works'


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Works></Works>
    </div>
    

  )
}

export default App
