import SidebarFilters from "../components/SidebarFilers";
import ListCategories from "../components/ListCategories";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorWindow from "../components/ErrorWindow";

function Meals() {
    const [category, setCategory] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        async function categoryList() {
            try {
                const callCategory = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
                setCategory(callCategory.data.categories);
                console.log(callCategory.data.categories);
            } catch (error) {
                console.log("Something went wrong", error);
                setErrorMessage(`${error.message}`);
            }
        }
        categoryList();
    }, []);

    if (errorMessage) {
    return<ErrorWindow errorM={errorMessage}/>
    }


    return (
        <>
            <section className="bg-accbg m-auto">
                <div className="">
                    <h1 className="text-5xl p-10 text-acc5">Meals</h1>
                    <div className="flex justify-center items-center">
                        <input className="w-10/12 h-15 broder border-2 border-acc1 rounded-2xl text-2xl px-5 " type="text" />
                    </div>
                    <div className="flex">
                        <ListCategories
                        category={category}
                        />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:mx-10">
                    <div>
                        <SidebarFilters />
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    );
}

export default Meals;
