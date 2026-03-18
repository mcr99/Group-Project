import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import AreaCard from "../components/AreaCard";
import CarouselBody from "../components/CarouselBody";

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
    <main className="bg-accbg flex flex-col items-center w-full min-h-screen">
      <div className="flex flex-col items-center gap-4 max-w-7xl p-4">
        <CarouselBody />
        <h3 className="text-2xl text-acc4 font-bold self uppercase">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 place-items-center md:w-2xl lg:w-auto gap-6">
          {myCategories.map((category) => (
            <CategoryCard category={category} key={category.idCategory} />
          ))}
        </div>
        <h3 className="text-2xl text-acc4 font-bold uppercase">Areas</h3>
        <div className="flex flex-wrap place-content-center md:max-w-3xl gap-2">
          {myAreas.map((area, index) => (
            <AreaCard area={area} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
