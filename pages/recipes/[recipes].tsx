import { GetServerSideProps } from "next";
import { useState } from "react";
import styles from "../../styles/Home.module.scss";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const recipeQuery = getRecipeQuery(context.query.recipes);

  const API_KEY = process.env.API_KEY;
  const ID = process.env.API_ID;

  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?type=public&q=all&app_id=${ID}&app_key=%${API_KEY}${recipeQuery}&field=uri&field=label&field=image&field=source&field=url&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&field=calories&field=totalTime&field=cuisineType&field=mealType&field=dishType&field=totalNutrients&field=totalDaily&&imageSize=SMALL&random=true
		`
  ).then((res) => res.json());

  return {
    props: {
      response: response,
    },
  };
};

const getRecipeQuery = (param: any) => {
  const query = param;
  return query;
};

export default function RecipesData(props: any) {
  const [recipeSlice, setRecipeSlice] = useState(7);

  console.log("props: ", props);

  const slicedProps = props.response.hits.slice(0, recipeSlice);

  return (
    <div className={styles.recipesWrapper}>
      <h1 className={styles.recipePageTitle}>Here are your recipes!</h1>
      {slicedProps.map((item: any) => (
        <a href={item.recipe.url} target="_blank" rel="noreferrer">
          <div className={styles.recipeContainer} key={item.recipe.uri}>
            <img
              className={styles.recipeImg}
              src={item.recipe.image}
              alt={item.recipe.label}
            />
            <p className={styles.recipeLabel}>{item.recipe.label.toLowerCase().charAt(0).toUpperCase()+item.recipe.label.substr(1).toLowerCase().trim()}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
