import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.scss";


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
    <div className={styles.resultsWrapper}>
			<Link className={styles.goLink} href={`/recipes/${searchData.slug}`}>
				<p className={styles.linkP}>GO!</p>
			</Link>
    </div>
  );
}
