function PartialError(){
    return( 
        <section className="flex flex-col items-center justify-center p-5 gap-5">
            <p className="text-center">Couldn't load filter.</p>
            <img src="support.png" alt="support icon" className="w-20" />
            <p className="text-center">Please try again later.</p>
        </section>
    )
}

export default PartialError