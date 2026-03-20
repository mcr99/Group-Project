import { Link } from "react-router-dom"

function ErrorWindow(prop){
    return(
        <main className="-mt-10 px-10 py-20 md:flex items-center justify-center h-screen lg:gap-10 bg-white">
            <article className="text-2xl flex flex-col justify-center items-center gap-10 font-bold md:max-w-125">
                <p className="text-center">{prop.errorM}</p>
                <p className="text-center">You may want to refresh the page or try again later.</p>
            </article>
            <img src="./network-error.gif" alt="boiling-pot" className="my-10 md:my-0 md:w-100"/>
        </main>
    )
}

export default ErrorWindow