import SidebarFilters from "../components/SidebarFilers";
import ListCategories from "../components/ListCategories";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorWindow from "../components/ErrorWindow";
import CardFood from "../components/CardFoot";

function Meals() {
  const [category, setCategory] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [allRecipes, setAllRecipes] = useState([]);
  const [searching, setSearching] = useState("");

  useEffect(() => {
    async function categoryList() {
      try {
        const callCategory = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php",
        );
        setCategory(callCategory.data.categories);
      } catch (error) {
        console.log("Something went wrong", error);
        setErrorMessage(`${error.message}`);
      }
    }
    categoryList();
  }, []);

  if (errorMessage) {
    return <ErrorWindow errorM={errorMessage} />;
  }

  useEffect(() => {
    async function getAllMeals() {
      try {
        const requests = category.map((item) =>
          axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.strCategory}`,
          ),
        );

        const results = await Promise.all(requests);

        const combinedRecipes = results.flatMap((res) => res.data.meals);

        setAllRecipes(combinedRecipes);
      } catch (error) {
        setErrorMessage(error.message);
      }
    }

    if (category.length > 0) {
      getAllMeals();
    }
  }, [category]);

  const isSearching = (event) => {
    setSearching(event.target.value);
  };

  return (
    <>
      <section className="bg-accbg m-auto">
        <div className="">
          <h1 className="text-5xl p-10 text-acc5 text-center font-bold">Meals</h1>
          <div className="flex justify-center items-center">
            <input
              onInput={isSearching}
              className="w-10/12 h-15 broder border-2 border-acc1 rounded-2xl text-2xl px-5 "
              type="text"
              placeholder="Search by name..."
            />
          </div>
          <div className="flex">
            <ListCategories category={category} />
          </div>
        </div>
        <div className="md:grid md:grid-cols-[352px_auto] md:mx-10">
          <div>
            <SidebarFilters />
          </div>
          <div>
            <CardFood searching={searching} allRecipes={allRecipes} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Meals;
