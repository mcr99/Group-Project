
import { useState } from "react";
import Header from "./components/Header";
import Meils from "./pages/Meils";

function App() {
    return (
        <>
            <Meils />
            <Header />
        </>
    );

import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Individual from "./pages/Individual";
import Footer from "./components/Footer";
import WhatsappContact from "./components/WhatsappContact";

function App() {
  return (
    <div  className='bg-accbg'>
      <Header/>
      <WhatsappContact/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/meal/:id" element={<Individual />}></Route>
      </Routes>      
      <Footer/>
    </div>
  )

}

export default App;
