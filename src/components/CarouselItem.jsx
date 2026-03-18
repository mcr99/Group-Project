import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * Function: CarouselItem
 * Purpose: One of the background items for the home carousel
 * @param {{carouselNum, position}} params carousel position, item position in carousel
 * @returns {object} ReactNode of carousel item
 */

function CarouselItem({ carouselNum, position }) {
  const [recipe, setRecipe] = useState([]);

  //Get the recipe API
  useEffect(() => {
    async function getRecipe() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php",
        );

        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Something went wrong: ", error);
      }
    }
    getRecipe();
  }, [carouselNum]);

  //Set label according to carousel slide
  let itemText = "";
  switch (carouselNum) {
    case 0:
      itemText = recipe.strArea;
      break;
    case 1:
      itemText = recipe.strCategory;
      break;
    case 2:
      itemText = recipe.strMeal;
      break;
    case 3:
      itemText = recipe.strArea;
      break;
    case 4:
      itemText = recipe.strIngredient1;
      break;
  }

  return (
    <Link
      to={`/meal/${recipe.idMeal}`}
      className={`relative flex justify-center w-1/4 h-full bg-cover ${position === 0 ? "rounded-l-lg" : position === 3 ? "rounded-r-lg" : ""}`}
      style={{ backgroundImage: `url(${recipe.strMealThumb})` }}
    >
      <p className="absolute text-xs md:text-sm lg:text-base top-3 p-1 bg-[#a9cc0e80] mx-2 text-acc5 rounded-lg">
        {itemText}
      </p>
    </Link>
  );
}

export default CarouselItem;
