
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from "./pages/Contact"
import About from "./pages/About"


function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
       
      </Routes>


    </>
  )
}

export default App
