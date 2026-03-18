
import Header from './components/Header'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    <Footer/>
    </>
  )
}

export default App
