import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CardFood({ searching, allRecipes }) {
  const [card, setCard] = useState([]);
  const { group, filter } = useParams();
  useEffect(() => {
    async function CardFoodUnic() {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?${group.slice(0, 1)}=${filter.toLowerCase()}`,
        );
        setCard(data.meals || []);
      } catch (error) {
        console.log("Algo salio mal:", error);
      }
    }
    CardFoodUnic();
  }, [filter]);

  useEffect(() => {
    if (searching) {
      setCard(
        allRecipes.filter((recipe) => recipe.strMeal.trim().toLowerCase().includes(searching.trim().toLowerCase())),
      );
    }
  }, [searching]);
  return (
    <>
      <div className="p-4 flex gap-4 flex-wrap">
        {card.map((item) => (
          <Link
            to={`/meal/${item.idMeal}`}
            key={item.idMeal}
            className="w-70 h-100 m-auto mb-5 inset-shadow-sm rounded-xl bg-acc3 hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div>
              <img className="p-5" src={item.strMealThumb} alt={item.strMeal} />
            </div>
            <p className="text-2xl text-acc5 pl-5">{item.strMeal}</p>
          </Link>
        ))}
        {searching && card.length === 0 ? <p className="text-4xl self-center font-semibold text-acc4 p-20">No search results</p> : ""}
      </div>
    </>
  );
}
export default CardFood;


function Skeleton(){
  
}