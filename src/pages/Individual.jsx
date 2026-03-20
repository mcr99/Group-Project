import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IndividualInfoSVGs from "../components/IndividualInfoSVGs";

/**
 * Function: Individual
 * Purpose: Shows page of an individual recipe
 * @param {} none
 * @returns {object} ReactNode of individual recipe page
 */

function Individual() {
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const ingredients = [];
  let instructions = [];
  let youtubeLink = "";

  //Get recipe API by url parameter id
  useEffect(() => {
    async function getRecipe() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`,
        );
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Something went wrong: ", error);
      } finally {
        setLoading(false);
      }
    }
    getRecipe();
  }, []);

  //Retrieves all ingredients and measurment and sets in an array
  for (let i = 0, end = 0; i < 20 && end !== 1; i++) {
    const currentIngredient = "strIngredient" + (i + 1);
    const currentMeasurement = "strMeasure" + (i + 1);
    const current = {
      id: i,
      measurment: recipe[currentMeasurement],
      ingredient: recipe[currentIngredient],
    };
    if (current.ingredient) {
      ingredients.push(current);
    } else {
      end = 1;
    }
  }

  //Splits instructions when loaded
  if (recipe.strInstructions) {
    instructions = recipe.strInstructions.split("\r\n").filter((item) => item);
  }

  //Edits Youtube link to embed
  if (recipe.strYoutube) {
    if (recipe.strYoutube.includes("watch?v=")) {
      youtubeLink = recipe.strYoutube.split("watch?v=").join("embed/");
    } else {
      youtubeLink = recipe.strYoutube.split("shorts").join("embed");
    }
  }

  return (
    <main className="flex flex-col items-center gap-5  bg-accbg w-full min-h-screen">
      {loading ? (
        <IndividualSkeleton />
      ) : (
        <div className="flex flex-col items-center gap-5  bg-accbg w-full min-h-screen">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-acc5 font-bold p-6 max-w-7xl">
            {recipe.strMeal}
          </h1>
          <IndividualInfoSVGs recipe={recipe} />
          {/* Picture and information container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl">
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="w-xs md:w-md lg:wLg place-self-center rounded-2xl border-2 border-acc1 shadowLg"
            />
            {/* Ingredients section */}
            <section className="bg-acc3 rounded-2xl border-2 border-acc1 place-self-center shadowLg">
              <h2 className="text-2xl text-acc5 font-semibold p-6">
                Ingredients
              </h2>
              <ul className="px-10 pb-10 text-acc4 list-disc">
                {ingredients.map((item) => (
                  <li key={item.id}>
                    {item.measurment} {item.ingredient}
                  </li>
                ))}
              </ul>
            </section>
            {/* Instructions section */}
            <section className="bg-acc3 rounded-2xl border-2 border-acc1 place-self-center md:col-span-2 shadowLg">
              <h2 className="text-2xl text-acc5 font-semibold p-6">
                Instructions
              </h2>
              <ol className="px-10 pb-10 text-acc4">
                {instructions &&
                  instructions.map((item, index) => (
                    <li key={index} className="py-1">
                      {item}
                    </li>
                  ))}
              </ol>
            </section>
          </div>
          {/* Embeded Youtube video */}
          {recipe.strYoutube && (
            <iframe
              src={youtubeLink}
              title={recipe.strMeal}
              loading="lazy"
              className="md:w-xl lg:w-4xl md:h-72 lg:h-116 mb-10 rounded-2xl border-2 border-acc1 shadowLg"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
    </main>
  );
}

export default Individual;

/**
 * Function: IndividualSkeleton
 * Purpose: Loading Skeleton for the individual recipe page
 * @param {} none
 * @returns {object} ReactNode of Skeleton
 */

function IndividualSkeleton() {
  return (
    <div className="flex flex-col items-center gap-5  bg-accbg w-full min-h-screen">
      <div className="w-xs md:w-md lg:w-170 h-10 bg-gray-400 animate-pulse"></div>
      <div className="flex justify-between items-end w-60">
        <div className="size-20 bg-gray-400 animate-pulse"></div>
        <div className="size-20 bg-gray-500 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl">
        <div className="w-xs md:w-md lg:w-lg h-80 md:h-112 lg:h-128 place-self-center rounded-2xl bg-gray-600 animate-pulse"></div>
        <div className="w-50 h-100 bg-gray-500 rounded-2xl place-self-center"></div>
        <div className="w-full h-100 bg-gray-400 rounded-2xl place-self-center md:col-span-2 "></div>
      </div>
      <div className="w-xs h-30 md:w-xl lg:w-4xl md:h-72 lg:h-116 mb-10 rounded-2xl bg-gray-500 animate-pulse"></div>
    </div>
  );
}
