import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CardFood({ searching, allRecipes }) {
    const [card, setCard] = useState([]);
    const { group, filter } = useParams();
    const [loadingcard, setLoadingCard] = useState(true);

    useEffect(() => {
        async function CardFoodUnic() {
            try {
                const { data } = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?${group.slice(0, 1)}=${filter.toLowerCase()}`);
                setCard(data.meals || []);
            } catch (error) {
                console.log("Algo salio mal:", error);
            } finally {
                setLoadingCard(false);
            }
        }
        CardFoodUnic();
    }, [filter]);

    useEffect(() => {
        if (searching) {
            setCard(allRecipes.filter((recipe) => recipe.strMeal.trim().toLowerCase().includes(searching.trim().toLowerCase())));
        }
    }, [searching]);
    return (
        <>
            {loadingcard ? (
                <CardSkeleton />
            ) : (
                <div className="p-4 flex gap-4 flex-wrap">
                    {card.map((item) => (
                        <Link
                            to={`/meal/${item.idMeal}`}
                            key={item.idMeal}
                            className="w-70 h-100 m-auto mb-5 inset-shadow-sm rounded-xl bg-acc3 hover:shadow-lg transition-shadow duration-300 ease-in-out">
                            <div>
                                <img className="p-5" src={item.strMealThumb} alt={item.strMeal} />
                            </div>
                            <p className="text-2xl text-acc5 pl-5">{item.strMeal}</p>
                        </Link>
                    ))}
                    {searching && card.length === 0 ? <p>No search results</p> : ""}
                </div>
            )}
        </>
    );
}
export default CardFood;

/**
 * Purpose: Loading Skeleton for the card links
 * @param {} none
 * @returns {object} ReactNode of Skeleton
 */

function CardSkeleton() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
            <div className="w-70 h-100 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
    );
}
