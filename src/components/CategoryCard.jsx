import { Link } from "react-router-dom";

/**
 * Function: CategoryCard
 * Purpose: Card link for each category
 * @param {{category}} category to be linked
 * @returns {object} ReactNode of card
 */

function CategoryCard({ category }) {
  return (
    <Link
      to={`/meals/category/${category.strCategory}`}
      className="group relative flex flex-col gap-2 items-center justify-center w-30 h-30 bg-radial from-acc5 to-acc3 to-60% text-acc4 font-bold rounded-full hover:cursor-pointer"
    >
      <img
        src={category.strCategoryThumb}
        alt={category.strCategory}
        className="w-24 group-hover:scale-125 transition-transform duration-300 ease-in-out"
      />
      <p className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        {category.strCategory}
      </p>
    </Link>
  );
}

export default CategoryCard;
