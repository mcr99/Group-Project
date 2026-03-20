import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ListCategories() {
    const [category, setCategory] = useState([]);
    const { group, filter } = useParams();

    useEffect(() => {
        async function categoryList() {
            try {
                const callCategory = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php");
                setCategory(callCategory.data.categories);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        categoryList();
    }, []);

    return (
        <>
            <div className="w-10/12 mx-5 grid grid-cols-1 md:m-auto">
                <p className="text-acc2 text-4xl mb-5 capitalize">categorias</p>
                <div className=" w-12/12 grid grid-cols-2 gap-1 text-2xl md:grid md:grid-cols-3 lg:grid lg:grid-cols-5 ">
                    {category.map((item) => (
                        <Link
                            to={`/meals/category/${item.strCategory}`}
                            className={` rounded-xl px-5 ${filter.toLowerCase() === item.strCategory.toLowerCase() && group === "category" ? "bg-acc5 text-acc3" : "bg-acc2"}`}
                            key={item.idCategory}>
                            {item.strCategory}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListCategories;
