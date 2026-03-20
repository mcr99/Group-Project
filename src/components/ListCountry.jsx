import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ListCountry() {
    const [area, setArea] = useState([]);
    const { filter } = useParams();

    useEffect(() => {
        async function countryList() {
            try {
                const callCountry = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
                setArea(callCountry.data.meals);
            } catch (error) {
                console.log("Algo salio mal:", error);
                setErrorMessage(`${error.message}`);
            }
        }
        countryList();
    }, []);

    return (
        <>
            <div>
                <p className="text-acc2 capitalize">country</p>
                <div className="h-60 grid grid-cols-2 overflow-y-auto">
                    {area.map((item, index) => (
                        <Link
                            to={`/meals/area/${item.strArea}`}
                            className={filter.toLowerCase() === item.strArea.toLowerCase() ? "text-acc2 bg-gray-300 rounded-md p-1" : "p-1"}
                            key={index}>
                            {item.strArea}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListCountry;
