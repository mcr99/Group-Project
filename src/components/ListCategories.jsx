import { Link, useParams } from "react-router-dom";

function ListCategories({ category }) {
    const { group, filter } = useParams()

    return (
        <>
            <div className="w-10/12 mx-5 grid grid-cols-1 md:m-auto">
                <p className="text-acc2 text-4xl mb-5 capitalize">Categories</p>
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