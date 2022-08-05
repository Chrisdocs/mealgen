import React, { useState } from "react";

export default function Search() {

  const [dietIsChecked, setDietIsChecked] = useState(false);
  const [healthIsChecked, setHealthIsChecked] = useState(false);
  const [mealIsChecked, setMealIsChecked] = useState(false);
  const [cuisineIsChecked, setCuisineIsChecked] = useState(false);

  const [diet, setDiet] = useState(null);
  const [health, setHealth] = useState(null);
  const [meal, setMeal] = useState(null);
  const [cuisine, setCuisine] = useState(null);

  function handleDietIsChecked() {
    if (dietIsChecked === false) {
      setDietIsChecked(true);
    } else {
      setDietIsChecked(false);
    }
  }

  function handleHealthChecked() {
    if (healthIsChecked === false) {
      setHealthIsChecked(true);
    } else {
      setHealthIsChecked(false);
    }
  }

  function handleMealIsChecked() {
    if (mealIsChecked === false) {
      setMealIsChecked(true);
    } else {
      setMealIsChecked(false);
    }
  }
  function handleCuisineIsChecked() {
    if (cuisineIsChecked === false) {
      setCuisineIsChecked(true);
    } else {
      setCuisineIsChecked(false);
    }
  }

  const healthArray = [
    "alcohol-cocktail",
    "alcohol-free",
    "celery-free",
    "crustacean-free",
    "dairy-free",
    "egg-free",
    "fish-free",
    "fodmap-free",
    "gluten-free",
    "immuno-supportive",
    "keto-friendly",
    "kidney-friendly",
    "kosher",
    "low-potassium",
    "low-sugar",
    "lupine-free",
    "Mediterranean",
    "mollusk-free",
    "mustard-free",
    "No-oil-added",
    "paleo",
    "peanut-free",
    "pecatarian",
    "pork-free",
    "red-meat-free",
    "sesame-free",
    "shellfish-free",
    "soy-free",
    "sugar-conscious",
    "sulfite-free",
    "tree-nut-free",
    "vegan",
    "vegetarian",
    "wheat-free",
  ];
  const dietArray = [
    "balanced",
    "high-fiber",
    "high-protein",
    "low-carb",
    "low-fat",
    "low-sodium",
  ];
  const mealArray = [
    "breakfast",
    "brunch",
    "lunch",
    "dinner",
    "snack",
    "teatime",
  ];
  const cuisineArray = [
    "american",
    "asian",
    "british",
    "caribbean",
    "central%20europe",
    "chinese",
    "eastern%20europe",
    "french",
    "greek",
    "indian",
    "italian",
    "japanese",
    "korean",
    "kosher",
    "mediterranean",
    "mexican",
    "middle%20eastern",
    "nordic",
    "south%20american",
    "south%20east%20asian",
    "world",
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();

    if (dietIsChecked === true) {
      setDiet(diet);
    } else {
      setDiet(null);
    }
    if (healthIsChecked === true) {
      setHealth(health);
    } else {
      setHealth(null);
    }
    if (mealIsChecked === true) {
      setMeal(meal);
    } else {
      setMeal(null);
    }
    if (cuisineIsChecked === true) {
      setCuisine(cuisine);
    } else {
      setCuisine(null);
    }
  }

	// TODO: some items can have multiple values in the request, so we need to handle that.  It requires a separate call string ie &cuisine=american&cuisine=french.

  return (
    <div>
      <form
				onSubmit={handleSubmit}
			>
        <div>
          <label htmlFor="Diet">Diet</label>
          <input
            type="checkbox"
            name="Diet"
            id="diet"
            onClick={handleDietIsChecked}
          />
          {dietIsChecked
            ? dietArray.map((item: string) => {
                return (
                  <div>
                    <label htmlFor={item}>{item}: </label>
                    <input type="radio" id={item} name="dietItems" />
                  </div>
                );
              })
            : null}
        </div>

        <div>
          <label htmlFor="health">Health </label>
          <input
            type="checkbox"
            id="health"
            name="health"
            onClick={handleHealthChecked}
          />
          {healthIsChecked
            ? healthArray.map((item: string) => {
                return (
                  <div>
                    <label htmlFor={item}>{item}: </label>
                    <input type="radio" id={item} name="healthItems" />
                  </div>
                );
              })
            : null}
        </div>

        <div>
          <label htmlFor="health">Meal </label>
          <input
            type="checkbox"
            id="health"
            name="health"
            onClick={handleMealIsChecked}
          />
          {mealIsChecked
            ? mealArray.map((item: string) => {
                return (
                  <div>
                    <label htmlFor={item}>{item}: </label>
                    <input type="radio" id={item} name="mealItems" />
                  </div>
                );
              })
            : null}
        </div>

        <div>
          <label htmlFor="health">Cuisine </label>
          <input
            type="checkbox"
            id="health"
            name="health"
            onClick={handleCuisineIsChecked}
          />
          {cuisineIsChecked
            ? cuisineArray.map((item: string) => {
                return (
                  <div>
                    <label htmlFor={item}>{item}: </label>
                    <input type="radio" id={item} name="cuisineItems" />
                  </div>
                );
              })
            : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
