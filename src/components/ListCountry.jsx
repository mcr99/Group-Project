import { useState, useEffect } from "react";
import axios from "axios";
import ErrorWindow from "../components/ErrorWindow";

function ListCountry() {
    const [area, setArea] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        async function countryList() {
            try {
                const callCountry = await axios.get("https://wsww.themealdb.com/api/json/v1/1/list.php?a=list");
                setArea(callCountry.data.meals);
                console.log(callCountry.data.meals);
            } catch (error) {
                console.log("Algo salio mal:", error);
                setErrorMessage(`${error.message}`);
            }
        }
        countryList();
    }, []);

    if (errorMessage) {
    return<ErrorWindow errorM={errorMessage}/>
    }

    return (
        <>
            <div>
                <p className="text-acc2 capitalize">country</p>
                <div className="h-100 grid grid-cols-2 overflow-y-auto">
                    {area.map((item) => (
                        <p>{item.strArea}</p>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ListCountry;
