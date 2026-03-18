import CarouselBody from "../components/CarouselBody";

function About(){
    return(
        <main className="bg-accbg flex flex-col items-center w-full min-h-screen p-15">
            <div className="flex flex-col items-center gap-6 max-w-5xl">
                <CarouselBody/>
                <h1 className="text-3xl md:text-4xl font bold text-acc4 uppercase">About Savory</h1>
                <p className="text-lg text-acc5"><span className="font-bold">Savory</span> is a web platform created to explore and enjoy meals from all around the world. Our mission is to bring global cuisine closer to you in a simple and interactive way</p>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-acc3 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-acc4 mb-2">Global Meals</h3>
                        <p>Discover meals from different countries and cultures around the world</p>
                    </div>
                    
                    <div className="bg-acc3 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-acc4 mb-2">Categories</h3>
                        <p>Browse meals by category to quickly find what you are craving</p>
                    </div>

                    <div className="bg-acc3 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-acc4 mb-2">Search by name</h3>
                        <p>Easily search meals by name and get instant results.</p>
                    </div>

                    <div className="bg-acc3 p-4 rounded-lg shadow">
                        <h3 className="text-xl font-bold text-acc4 mb-2">By Country</h3>
                        <p>Explore meals based on their country of origin.</p>
                    </div>
                </div>

                <p className="text-md text-acc5 mt-4">
                    Whether you are looking for inspiration, new recipies, or just exploring,<span className="font-bold">Savory</span> is your gateway to the world of premium food.
                </p>

            </div>
            
        </main>
    )
}
export default About