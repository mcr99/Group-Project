import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CardFood() {
    const [card, setCard] = useState([]);
    const { group, filter } = useParams();
    useEffect(() => {
        async function CardFoodUnic() {
            try {
                const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
                setCard(data.meals || []);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        CardFoodUnic();
    }, []);
    return (
        <>
            <div>
                {card.map((item) => (
                    <div key={item.idMeal} className="w-70 h-100 m-auto mb-5 inset-shadow-sm rounded-xl">
                        <div>
                            <img className="p-5" src={item.strMealThumb} alt={item.strMeal} />
                        </div>
                        <p className="text-2xl text-acc5 pl-5">Meal: {item.strMeal}</p>
                        <p className="text-2xl text-acc5 pl-5">Category: {item.strCategory}</p>
                        <p className="text-2xl text-acc5 pl-5">Area: {item.strArea}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
export default CardFood;
