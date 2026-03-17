import axios from "axios";
import { useEffect, useState } from "react";


function CarouselItem({ carouselNum, place }) {
    const [myRecipe, setMyRecipe] = useState([]);

    useEffect(() => {
    async function getRecipe() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );

        setMyRecipe(data.meals[0]);
      } catch (error) {
        console.error("Something went wrong: ", error);
      }
    }
    getRecipe();
  }, [carouselNum]);

  let itemText = ""

  switch (carouselNum){
    case(0):
        itemText = myRecipe.strArea;
        break;
    case(1):
        itemText = myRecipe.strCategory;
        break;
    case(2):
        itemText = myRecipe.strMeal;
        break;
    case(3):
        itemText = myRecipe.strArea;
        break;
    case(4):
        itemText = myRecipe.strIngredient1;
        break;
  }
  

    return ( 
        
      <div className={`relative flex justify-center w-1/4 h-full bg-cover ${place === 0 ? "rounded-l-lg" : place === 3 ? "rounded-r-lg" : ""}`} style={myRecipe ? {backgroundImage: `url(${myRecipe.strMealThumb})`}: {}}>
        <p className="absolute text-xs md:text-sm lg:text-base top-3 p-1 bg-[#a9cc0e80] mx-2 text-acc5 rounded-lg">{itemText}</p>
      </div>
        
     );
}

export default CarouselItem;