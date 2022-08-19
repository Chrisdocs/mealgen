import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import RecipesData from "../pages/recipes/[recipes]";


export default function SearchResults(data: any) {
	const [recipeData, setRecipeData] = useState({})
	console.log("Recipe Data ----->> ", recipeData)
	console.log("data -----> ", data)


  const and = "&";
  const diet = data.diet ? data.diet : "";
  const health = data.health ? data.health : "";
  const meal = data.meal ? data.meal : "";
  const cuisine = data.cuisine ? data.cuisine : "";

  // turn the array into a string and add '&=' to the beginning of each item
  const dietString =
    diet != "" ? diet.map((item: any) => `&diet=${item}`).join("") : "";
  const healthString =
    health !== "" ? health.map((item: any) => `&health=${item}`).join("") : "";
  const mealString =
    meal !== "" ? meal.map((item: any) => `&meal=${item}`).join("") : "";
  const cuisineString =
    cuisine !== ""
      ? cuisine.map((item: any) => `&cuisine=${item}`).join("")
      : "";

  console.log("diet query text: ", dietString);
  console.log("health query text: ", healthString);
  console.log("meal query text: ", mealString);
  console.log("cuisine query text: ", cuisineString);

	const searchData = {
		...recipeData,
		diet: dietString,
		health: healthString,
		meal: mealString,
		cuisine: cuisineString,
		slug: `${dietString}${healthString}${mealString}${cuisineString}`
	}

  return (
    <div>
      <h2>Search Results</h2>
			<Link href={`/recipes/${searchData.slug}`}>
				Link!
			</Link>
    </div>
  );
}
