import SidebarFilters from "../components/SidebarFilers";
import ListCategories from "../components/ListaCategories";
import CardFood from "../components/CardFoot";

function Meals() {
    return (
        <>
            <section className="bg-accbg m-auto">
                <div className="">
                    <h1 className="text-5xl p-10 text-acc5">Meals</h1>
                    <div className="flex justify-center items-center">
                        <input className="w-10/12 h-15 broder border-2 border-acc1 rounded-2xl text-2xl px-5 " type="text" />
                    </div>
                    <div className="flex">
                        <ListCategories />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:mx-10">
                    <div>
                        <SidebarFilters />
                    </div>
                    <div>
                        <CardFood />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Meals;
