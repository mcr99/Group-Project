
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from "./pages/Contact"
import About from "./pages/About"
import WhatsappContact from './components/WhatsappContact'

import Footer from './components/Footer'

function App() {
  

  return (
    <div  className='bg-accbg'>
    <Header/>
    <WhatsappContact/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/About' element={<About/>}></Route>
       
      </Routes>
      
    <Footer/>
    </div>
  )
}

export default App
