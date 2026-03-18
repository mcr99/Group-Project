import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "../components/CategoryCard";
import AreaCard from "../components/AreaCard";
import CarouselBody from "../components/CarouselBody";

/**
 * Function: Home
 * Purpose: Shows home page of site
 * @param {} none
 * @returns {object} ReactNode of Home page
 */

function Home() {
  const [myCategories, setMyCategories] = useState([]);
  const [myAreas, setMyAreas] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingAreas, setLoadingAreas] = useState(true);

  //Get the APIs
  useEffect(() => {
    //Get the categories API
    async function getCategories() {
      try {
        setLoadingCategories(true);
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );

        setMyCategories(data.categories);
      } catch (error) {
        console.error("Something went wrong: ", error);
      } finally {
        setLoadingCategories(false);
      }
    }

    //get the areas API
    async function getAreas() {
      try {
        setLoadingAreas(true);
        const { data } = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
        );

        setMyAreas(data.meals);
      } catch (error) {
        console.error("Something went wrong: ", error);
      } finally {
        setLoadingAreas(false);
      }
    }

    getCategories();
    getAreas();
  }, []);

  return (
    <main className="bg-accbg flex flex-col items-center w-full min-h-screen">
      <div className="flex flex-col items-center gap-4 max-w-7xl p-4">
        <CarouselBody />
        
        {/* Category Selection Links */}
        <h3 className="text-2xl text-acc4 font-bold self uppercase">
          Categories
        </h3>
        {loadingCategories ? (
          <CategoriesSkeleton />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 place-items-center md:w-2xl lg:w-auto gap-6">
            {myCategories.map((category) => (
              <CategoryCard category={category} key={category.idCategory} />
            ))}
          </div>
        )}
        
        {/* Area Selection Links */}
        <h3 className="text-2xl text-acc4 font-bold uppercase">Areas</h3>
        {loadingAreas ? (
          <AreaSkeleton />
        ) : (
          <div className="flex flex-wrap place-content-center md:max-w-3xl gap-2">
            {myAreas.map((area, index) => (
              <AreaCard area={area} key={index} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;

/**
 * Function: CategoriesSkeleton
 * Purpose: Loading Skeleton for the categories links
 * @param {} none
 * @returns {object} ReactNode of Skeleton
 */

function CategoriesSkeleton() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 place-items-center md:w-2xl lg:w-auto gap-6">
      <div className="w-30 h-30 bg-radial from-gray-500 to-gray-100 to-60% rounded-full animate-pulse"></div>
      <div className="w-30 h-30 bg-radial from-gray-600 to-gray-200 to-60% rounded-full animate-pulse"></div>
      <div className="w-30 h-30 bg-radial from-gray-700 to-gray-300 to-60% rounded-full animate-pulse"></div>
      <div className="w-30 h-30 bg-radial from-gray-600 to-gray-200 to-60% rounded-full animate-pulse"></div>
      <div className="w-30 h-30 bg-radial from-gray-700 to-gray-300 to-60% rounded-full animate-pulse"></div>
      <div className="w-30 h-30 bg-radial from-gray-500 to-gray-100 to-60% rounded-full animate-pulse"></div>
      <div className="w-30 h-30 bg-radial from-gray-600 to-gray-200 to-60% rounded-full animate-pulse"></div>
      <div className="lg:hidden w-30 h-30 bg-radial from-gray-500 to-gray-100 to-60% rounded-full animate-pulse"></div>
    </div>
  );
}

/**
 * Function: AreaSkeleton
 * Purpose: Loading Skeleton for the area links
 * @param {} none
 * @returns {object} ReactNode of Skeleton
 */

function AreaSkeleton() {
  return (
    <div className="flex flex-wrap place-content-center md:max-w-3xl gap-2">
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-400 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-500 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-300 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-500 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-400 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-300 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-500 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-400 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-300 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-400 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-500 animate-pulse"></div>
      </div>
      <div className="flex items-center justify-center size-16">
        <div className="rounded-sm w-14 h-10 bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
}
