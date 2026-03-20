import { useState } from "react"
import {Link} from "react-router-dom"

function Header(){
    const [change, setChange] = useState(true)

    function changeHamburgerToggle(){
        setChange(!change)
    }

    return(
        <header className="bg-acc4 sticky w-full z-100 top-0">
            <div className={`${change ? `hidden` : `block`} absolute -z-10 w-screen h-screen bg-black/50 sm:hidden`} onClick={changeHamburgerToggle}></div>
            <div className="bg-acc4 flex justify-between px-5 xl:mx-[10%] 2xl:mx-[15%]">
                <Link to="/">
                    <img src="/recipe.png" alt="Logo" loading="lazy" className="w-11 my-4"/>
                </Link>
                <div className="flex items-center justify-center">
                    <p className="text-2xl font-bold text-accbg hover:cursor-pointer hover:bg-accbg hover:text-acc4 p-3 rounded-lg sm:hidden" onClick={changeHamburgerToggle}>☰</p>
                    <nav className="hidden text-accbg font-bold sm:flex flex-col sm:flex-row items-center gap-1 h-full">
                        <Link to="/" className="p-3 hover:bg-accbg hover:text-acc4 hover:rounded-lg">Home</Link>
                        <Link to="/meals" className="p-3 hover:bg-accbg hover:text-acc4 hover:rounded-lg">Meals</Link>
                        <Link to="/contact" className="p-3 hover:bg-accbg hover:text-acc4 hover:rounded-lg">Contact Us</Link>
                        <Link to="/about" className="p-3 hover:bg-accbg hover:text-acc4 hover:rounded-lg">About Us</Link>
                    </nav>
                </div>
            </div>
            
            <nav className={`${change ? `hidden` : `block`} absolute w-full bg-acc2 text-accbg font-bold flex flex-col gap-2 p-2 sm:hidden`}>
                <Link to="/" className="hover:text-acc2 hover:bg-accbg hover:rounded-xl w-full h-11 flex items-center justify-center">Home</Link>
                <Link to="/meals" className="hover:text-acc2 hover:bg-accbg hover:rounded-xl w-full h-11 flex items-center justify-center">Meals</Link>
                <Link to="/contact" className="hover:text-acc2 hover:bg-accbg hover:rounded-xl w-full h-11 flex items-center justify-center">Contact Us</Link>
                <Link to="/about" className="hover:text-acc2 hover:bg-accbg hover:rounded-xl w-full h-11 flex items-center justify-center">About Us</Link>
            </nav>
        </header>
    )
}

export default Header