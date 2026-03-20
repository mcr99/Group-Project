import { Link } from "react-router-dom"

function NotFound(){
    return(
        <main className="-mt-10 px-10 py-20 md:flex items-center justify-center md:h-screen lg:gap-10 bg-white">
            <article className="text-2xl flex flex-col justify-center items-center gap-10 font-bold md:max-w-125">
                <p className="text-center">404 - Page not found</p>
                <p className="text-center">Ooops! Something went wrong. You might find what you need on our homepage.</p>
                <Link to="/" className="bg-acc5 py-2 px-3 rounded-4xl text-accbg flex items-center justify-center gap-5 max-w-80">
                    <p>Go to Home Page </p>
                    <img src="./customer-service.png" alt="customer service icon" className="w-11 h-11"/>
                </Link>
            </article>
            <img src="./boiling-pot.gif" alt="boiling-pot" className="my-10 md:my-0 md:w-100"/>
        </main>
    )
}

export default NotFound