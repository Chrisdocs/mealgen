import React, { useState } from "react";
import {
  useMultiselectDiet,
  useMultiselectHealth,
  useMultiselectCuisine,
  useMultiselectMeal,
} from "./hooks";
import styles from '../styles/Home.module.scss'
import SearchResults from "./SearchResults";

function Search({ data }: any) {
	
  const { selectedDiet, isSelectedDiet, onChangeDiet } = useMultiselectDiet([]);
  const { selectedHealth, isSelectedHealth, onChangeHealth } =
    useMultiselectHealth([]);
  const { selectedCuisine, isSelectedCuisine, onChangeCuisine } =
    useMultiselectCuisine([]);
  const { selectedMeal, isSelectedMeal, onChangeMeal } = useMultiselectMeal([]);

  const [dietIsChecked, setDietIsChecked] = useState(false);
  const [healthIsChecked, setHealthIsChecked] = useState(false);
  const [mealIsChecked, setMealIsChecked] = useState(false);
  const [cuisineIsChecked, setCuisineIsChecked] = useState(false);

  const [diet, setDiet] = useState<any>([]);
  const [health, setHealth] = useState<any>([]);
  const [meal, setMeal] = useState<any>([]);
  const [cuisine, setCuisine] = useState<any>([]);

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
      setDiet(selectedDiet);
    } else {
      setDiet([]);
    }
    if (healthIsChecked === true) {
      setHealth(selectedHealth);
    } else {
      setHealth([]);
    }
    if (mealIsChecked === true) {
      setMeal(selectedMeal);
    } else {
      setMeal([]);
    }
    if (cuisineIsChecked === true) {
      setCuisine(selectedCuisine);
    } else {
      setCuisine([]);
    }
  }

  // TODO: some items can have multiple values in the request, so we need to handle that.  It requires a separate call string ie &cuisine=american&cuisine=french.

  // The item state holder 'cuisine' will need to be an array of selected values. those values will need to be mapped in the fetch url to render a separate call string for each value.

  // May be best to do all the array generation and stringification in this local component and pass the final string to the api component.

	// console.log("selected in diet: ", selectedDiet, 'diet: ', diet);
  // console.log("selected in health: ", selectedHealth, "health: ", health);
	// console.log("selected in meal: ", selectedMeal, "meal: ", meal);
	// console.log("selected in cuisine: ", selectedCuisine, "cuisine: ", cuisine);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Diet">Diet</label>
          <input
            type="checkbox"
            name="Diet"
            id="diet"
            onClick={handleDietIsChecked}
          />
          <ul style={{ listStyleType: "none" }}>
            {dietIsChecked
              ? dietArray.map((item: string) => {
                  return (
                    <li className={styles.list} key={item}>
                      <label className={styles.listLabel} htmlFor={item}>{item}: </label>
                      <input
												className={styles.listInput}
                        type="checkbox"
                        id={item}
                        name="dietItems"
                        value={item}
                        checked={isSelectedDiet(item)}
                        onChange={onChangeDiet}
                      />
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <div>
          <label htmlFor="health">Health </label>
          <input
            type="checkbox"
            id="health"
            name="health"
            onClick={handleHealthChecked}
          />
          <ul style={{ listStyleType: "none" }}>
            {healthIsChecked
              ? healthArray.map((item: string) => {
                  return (
                    <li className={styles.list} key={item}>
                      <label className={styles.listLabel} htmlFor={item}>{item}: </label>
                      <input
											className={styles.listInput}
                        type="checkbox"
                        id={item}
                        name="healthItems"
                        value={item}
                        checked={isSelectedHealth(item)}
                        onChange={onChangeHealth}
                      />
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <div>
          <label htmlFor="health">Meal </label>
          <input
            type="checkbox"
            id="meal"
            name="meal"
            onClick={handleMealIsChecked}
          />
          <ul style={{ listStyleType: "none" }}>
            {mealIsChecked
              ? mealArray.map((item: string) => {
                  return (
                    <li className={styles.list} key={item}>
                      <label className={styles.listLabel} htmlFor={item}>{item}: </label>
                      <input
											className={styles.listInput}
                        type="checkbox"
                        id={item}
                        name="mealItems"
                        value={item}
                        checked={isSelectedMeal(item)}
                        onChange={onChangeMeal}
                      />
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <div>
          <label htmlFor="health">Cuisine </label>
          <input
            type="checkbox"
            id="cuisine"
            name="cuisine"
            onClick={handleCuisineIsChecked}
          />
          <ul style={{ listStyleType: "none" }}>
            {cuisineIsChecked
              ? cuisineArray.map((item: string) => {
                  return (
                    <li className={styles.list} key={item}>
                      <label className={styles.listLabel} htmlFor={item}>{item}: </label>
                      <input
											className={styles.listInput}
                        type="checkbox"
                        id={item}
                        name="cuisineItems"
                        value={item}
                        checked={isSelectedCuisine(item)}
                        onChange={onChangeCuisine}
                      />
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <button type="submit">Submit</button>
      </form>
			<SearchResults diet={diet} health={health} meal={meal} cuisine={cuisine}/>
    </div>
  );
}

export default Search;