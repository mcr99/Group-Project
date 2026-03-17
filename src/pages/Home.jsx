import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import AreaCard from "../components/AreaCard";

function Home() {
  const [myCategories, setMyCategories] = useState([]);
  const [myAreas, setMyAreas] = useState([]);

  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );

        setMyCategories(data.categories);
      } catch (error) {
        console.error("Something went wrong: ", error);
      }
    }
    getCategories();
  }, []);

  useEffect(() => {
    async function getAreas() {
      try {
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
        );

        setMyAreas(data.meals);
      } catch (error) {
        console.error("Something went wrong: ", error);
      }
    }
    getAreas();
  }, []);

  return (
    <div>
      <h2>This is the home page</h2>
      {console.log(myCategories)}
      <h3>Categories</h3>
      <div className="grid grid-cols-7 place-content-center max-w-7xl gap-6">
        {myCategories.map((category) => (
          <CategoryCard category={category} key={category.idCategory} />
        ))}
      </div>
      <h3>Areas</h3>
      <div className="flex flex-wrap place-content-center max-w-7xl gap-2">
        {myAreas.map((area,index) => (
          <AreaCard area={area} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Home;
