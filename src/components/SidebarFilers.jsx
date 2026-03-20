import ListCountry from "./ListCountry";
import ListIngredients from "./Ingredients";

function SidebarFilters() {
    return (
        <>
            <div className="sticky top-20 md:w-75 flex flex-col m-5 md:ml-8 text-2xl inset-shadow-sm rounded-2xl p-4 ">
                <div>
                    <p className="text-acc2 text-4xl capitalize">filters</p>
                    <ListCountry />
                    <ListIngredients />
                </div>
            </div>
        </>
    );
}

export default SidebarFilters;
