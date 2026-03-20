import { useState, useEffect } from "react";
import axios from "axios";

function ListIngredients() {
    const [ingredients, setIngredients] = useState([]);

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
            <div className="w-72 grid grid-cols-1 ">
                <p className="text-acc2 text-2xl mb-5 capitalize">ingredients</p>
                <div className=" w-70 flex flex-wrap gap-1 overflow-y-auto text-xl ">
                    {ingredients.slice(0, 15).map((item) => (
                        <p className="bg-acc2 rounded-xl p-2" key={item.idIngredient}>
                            {item.strIngredient}
                        </p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListIngredients;
