import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ListIngredients() {
    const [ingredients, setIngredients] = useState([]);
    const { group, filter } = useParams();

    useEffect(() => {
        async function callIngredients() {
            try {
                const IngredientesList = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
                setIngredients(IngredientesList.data.meals);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        callIngredients();
    }, []);
    return (
        <>
            <div className="w-full md:w-72 grid grid-cols-1 ">
                <p className="text-acc2 text-2xl mb-5 capitalize">ingredients</p>
                <div className="w-full md:w-70 md:h-60 flex flex-wrap gap-1 overflow-y-auto text-xl ">
                    {ingredients.slice(0, 15).map((item) => (
                        <Link to={`/meals/ingredient/${item.strIngredient}`} className={`rounded-xl p-2 ${filter.toLowerCase() === item.strIngredient.toLowerCase() && group === "ingredient" ? "bg-acc5 text-acc3" : "bg-acc2"}`} key={item.idIngredient}>
                            {item.strIngredient}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListIngredients;
