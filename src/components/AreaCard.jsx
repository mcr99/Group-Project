import { Link } from "react-router-dom";

const flags = {
  Algerian: "dz",
  American: "us",
  Argentinian: "ar",
  Australian: "au",
  British: "gb",
  Canadian: "ca",
  Chinese: "cn",
  Croatian: "hr",
  Dutch: "nl",
  Egyptian: "eg",
  Filipino: "ph",
  French: "fr",
  Greek: "gr",
  Indian: "in",
  Irish: "ie",
  Italian: "it",
  Jamaican: "jm",
  Japanese: "jp",
  Kenyan: "kn",
  Malaysian: "my",
  Mexican: "mx",
  Moroccan: "ma",
  Norwegian: "no",
  Polish: "pl",
  Portuguese: "pt",
  Russian: "ru",
  SaudiArabian: "sa",
  Slovakian: "sk",
  Spanish: "es",
  Syrian: "sy",
  Thai: "th",
  Tunisian: "tn",
  Turkish: "tr",
  Ukrainian: "ua",
  Uruguayan: "uy",
  Venezulan: "ve",
  Vietnamese: "vn",
};

/**
 * Function: AreaCard
 * Purpose: Card link for each area, showing the flag
 * @param {{area}} area to be linked
 * @returns {object} ReactNode of card
 */

function AreaCard({ area }) {
  const flagName = area.strArea.split(" ").join("");
  const areaCode = flags[flagName];

  return (
    <Link
      to={`/meals/area/${area.strArea}`}
      className="group hover:cursor-pointer"
    >
      <img
        src={`https://www.themealdb.com/images/icons/flags/big/64/${areaCode}.png`}
        alt={area.strArea}
        className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
      />
    </Link>
  );
}
export default AreaCard;
