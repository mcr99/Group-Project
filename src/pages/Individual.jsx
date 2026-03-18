import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * Function: Individual
 * Purpose: Shows page of an individual recipe
 * @param {} none
 * @returns {object} ReactNode of individual recipe page
 */

function Individual() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();
  const ingredients = [];
  let instructions = [];
  let youtubeLink = "";

  //Get recipe API by url parameter id
  useEffect(() => {
    async function getRecipe() {
      try {
        const { data } = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`,
        );
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Something went wrong: ", error);
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
    youtubeLink = recipe.strYoutube.split("watch?v=").join("embed/");
  }

  return (
    <main className="flex flex-col items-center gap-5  bg-accbg w-full min-h-screen">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center text-acc5 font-bold p-6 max-w-7xl">
        {recipe.strMeal}
      </h1>
      {/* Information items */}
      <div className="flex justify-between items-end w-60">
        <div className="relative flex flex-col justify-between items-center">
          <svg
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            id="Layer_1"
            version="1.1"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="currentColor"
            className="size-20"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  d="M58.923,50.382c0.102-0.244,0.102-0.52,0-0.764c-0.102-0.245-0.296-0.439-0.541-0.541 C58.26,49.026,58.13,49,58,49h-2.5c-0.001-12.645-9.988-22.952-22.505-23.475c0-0.009,0.005-0.017,0.005-0.025v-2.663 c1.442-0.433,2.499-1.753,2.5-3.337c-0.001-1.934-1.566-3.499-3.5-3.5c-1.934,0.001-3.499,1.566-3.5,3.5 c0.001,1.584,1.058,2.904,2.5,3.337V25.5c0,0.009,0.005,0.017,0.005,0.025C18.488,26.048,8.501,36.355,8.5,49H6 c-0.13,0-0.26,0.026-0.382,0.077c-0.245,0.102-0.439,0.296-0.541,0.541c-0.102,0.244-0.102,0.52,0,0.764 c0.051,0.123,0.124,0.234,0.217,0.326l5.878,5.878c0.72,0.715,1.679,1.287,2.703,1.715C14.902,58.723,15.985,58.996,17,59h30 c1.015-0.004,2.098-0.277,3.125-0.699c1.024-0.428,1.983-1,2.703-1.715l5.878-5.878C58.799,50.616,58.872,50.505,58.923,50.382z M30.5,19.5c0.002-0.828,0.672-1.498,1.5-1.5c0.828,0.002,1.498,0.672,1.5,1.5c-0.002,0.828-0.672,1.498-1.5,1.5 C31.172,20.998,30.502,20.328,30.5,19.5z M16.798,33.798C20.691,29.905,26.061,27.5,32,27.5s11.309,2.405,15.202,6.298 C51.095,37.691,53.499,43.061,53.5,49h-43C10.5,43.061,12.905,37.691,16.798,33.798z M51.414,55.172 c-0.446,0.451-1.223,0.939-2.055,1.281C48.53,56.8,47.636,57.004,47,57H17c-0.636,0.004-1.53-0.2-2.359-0.547 c-0.832-0.342-1.608-0.83-2.055-1.281L8.414,51h47.172L51.414,55.172z"
                  fill="currentColor"
                ></path>{" "}
                <path
                  d="M24.684,32.052c-3.209,1.068-5.364,2.95-6.702,4.558c-1.34,1.61-1.882,2.95-1.91,3.02 c-0.205,0.513,0.045,1.095,0.558,1.3s1.095-0.045,1.3-0.558V40.37c0.032-0.078,0.534-1.251,1.7-2.611 c1.168-1.361,2.983-2.908,5.688-3.811c0.523-0.174,0.807-0.74,0.632-1.265C25.774,32.16,25.208,31.877,24.684,32.052z"
                  fill="currentColor"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
          <p className="absolute top-12.5 text-[9px] uppercase font-bold">
            Category
          </p>
          <p className="text-xl text-acc4 font-bold">{recipe.strCategory}</p>
        </div>
        <div className="relative flex flex-col items-center w-20">
          <svg
            fill="currentColor"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 164 256"
            enableBackground="0 0 164 256"
            xmlSpace="preserve"
            className="size-16"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M161.777,37.14c0-19.409-15.731-35.14-35.14-35.14c-19.409,0-35.14,15.731-35.14,35.14c0,4.87,1.01,10.729,2.781,14.953 c6.731,16.055,24.315,58.217,30.316,72.607c-14.107-12.36-32.92-19.342-53.163-17.996c-40.704,2.353-71.643,37.41-69.055,78.114 c2.47,40.586,37.528,71.408,78.231,69.055c40.704-2.47,71.643-37.527,68.938-78.231c-1.154-19.015-9.397-35.896-22-48.214 c4.463-10.692,24.22-58.024,31.452-75.272C160.766,47.931,161.777,42.01,161.777,37.14z M72.371,245.168 c-14.352-0.941-28.116-6.588-39.174-16.234c-13.058-11.529-20.705-27.528-21.881-44.703c-1.176-15.529,2.588-30.116,11.999-42.351 c0.353,3.176,2.117,5.647,2.117,7.882c0,8.823-0.706,14.117,4.941,21.058c2.235,2.588,3.059,6.823,4,10.117 c1.176,3.176,4.941,4.706,7.764,6.588c5.411,3.529,10.705,8.117,16.587,11.293c3.764,2.118,6,3.176,5.411,7.764 c-0.706,3.529-0.706,5.882-2.47,9.176c-0.353,1.176,2.588,7.176,3.529,7.882c3.059,2.47,5.882,4.941,9.058,7.176 C79.194,234.345,74.253,239.639,72.371,245.168z M132.956,192.348c0,0,3.764,1.176,6.823,0.353 c-2.235,11.529-7.294,21.999-15.293,31.057c-8.823,10-19.999,16.94-32.587,19.999c1.529-4.47,4.47-8.823,7.294-11.294 c2.47-2.235,5.411-6.235,6.588-9.176c1.176-3.176,2.588-5.882,4.47-8.823c2.235-4-6.941-9.646-9.999-10.588 c-6.823-2.47-11.882-5.882-17.764-9.646c-4.353-2.588-17.293,3.412-22.234,1.529c-6.588-2.47-8.823-4.47-14.705-8.235 c-6-4-4.353-12.47-4.706-18.705c4.47,0,10.705-1.882,13.999,1.529c0.941,1.176,4.47,5.882,6.588,4c2.235-2.353-1.176-8-1.882-9.294 c-2.118-4,3.764-6.235,6.823-9.176c3.765-4,11.882-10.588,10.941-13.058c-0.941-2.588-9.176-10-13.764-8.235 c-0.941,0-6.235,5.882-7.294,6.823c0-2.118-0.353-3.176-0.353-5.059c0-1.294-2.588-2.47-2.47-3.412 c0.235-2.235,5.882-6.588,7.176-8.235c-1.177-0.706-4.941-3.412-5.882-3.059c-2.47,1.294-5.412,2.235-8.117,3.412 c0-0.941-0.235-1.882-0.353-2.47c5.059-2.588,10.588-4.47,16.234-5.882l5.059,1.882l3.765,4l3.765,3.529 c0,0,2.235,0.941,3.176,0.941c1.177-0.235,4.706-4.941,4.706-4.941l-1.529-3.529l-0.235-3.176c10.117,0.941,19.646,4,28.116,9.176 c-1.294,0.235-3.176,0.353-4.941,0.941c-0.706-0.353-4.706,0.353-4.47,2.118c0.235,1.294,7.176,6.941,10.117,11.882 c3.059,5.059,11.529,8.235,13.058,13.999c1.529,6.588-0.941,15.058,0.235,22.94C124.486,184.23,132.956,192.348,132.956,192.348z M126.636,53.365c-8.822,0-15.975-7.153-15.975-15.975c0-8.823,7.153-15.975,15.975-15.975c8.823,0,15.975,7.153,15.975,15.975 C142.612,46.212,135.459,53.365,126.636,53.365z"></path>{" "}
            </g>
          </svg>
          <p className="absolute top-3 -left-1 text-[9px] uppercase font-bold">
            Location
          </p>
          <p className="text-xl text-acc4 font-bold whitespace-nowrap">
            {recipe.strArea}
          </p>
        </div>
      </div>
      {/* Picture and information container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-6xl">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-xs md:w-md lg:wLg place-self-center rounded-2xl border-2 border-acc1 shadowLg"
        />
        {/* Ingredients section */}
        <section className="bg-acc3 rounded-2xl border-2 border-acc1 place-self-center shadowLg">
          <h2 className="text-2xl text-acc5 font-semibold p-6">Ingredients</h2>
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
          <h2 className="text-2xl text-acc5 font-semibold p-6">Instructions</h2>
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
    </main>
  );
}

export default Individual;
