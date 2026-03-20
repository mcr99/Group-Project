import { useState, useEffect } from "react";
import axios from "axios";

function ListCountry() {
    const [area, setArea] = useState([]);

    useEffect(() => {
        async function countryList() {
            try {
                const { data } = await axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
                setArea(data.meals);
            } catch (error) {
                console.log("Algo salio mal:", error);
            }
        }
        countryList();
    }, []);
    return (
        <>
            <div>
                <p className="text-acc2 capitalize">country</p>
                <div className="h-100 grid grid-cols-2 overflow-y-auto">
                    {area.map((item, index) => (
                        <p key={index}>{item.strArea}</p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListCountry;
