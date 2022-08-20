import React, { useState } from "react";
import {
  useMultiselectDiet,
  useMultiselectHealth,
  useMultiselectCuisine,
  useMultiselectMeal,
} from "./hooks";
import styles from "../styles/Home.module.scss";
import SearchResults from "./SearchResults";
import Link from "next/link";

export default function Search() {
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

  return (
    <div className={styles.searchWrapper}>
			<div>
				<h1 className={styles.searchTitle}>Choose your meal preferences!</h1>
			</div>
      <form onSubmit={handleSubmit} className={styles.formEl}>
        <div className={styles.checkBoxContainer}>
          <div className={styles.listContainer}>
            <label className={styles.label} htmlFor="diet">Diet</label>
            <input
              className={styles.checkBoxParent}
              type="checkbox"
              name="diet"
              id="diet"
              onClick={handleDietIsChecked}
            />
            <ul className={styles.checkBoxUl}>
              {dietIsChecked
                ? dietArray.map((item: string) => {
                    return (
                      <li className={styles.list} key={item}>
                        <label className={styles.listLabel} htmlFor={item}>
                          {item}:{" "}
                        </label>
                        <input
                          className={styles.checkBoxChild}
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

          <div className={styles.listContainer}>
            <label className={styles.label} htmlFor="health">Health </label>
            <input
              className={styles.checkBoxParent}
              type="checkbox"
              id="health"
              name="health"
              onClick={handleHealthChecked}
            />
            <ul style={{ listStyleType: "none" }} className={styles.checkBoxUl}>
              {healthIsChecked
                ? healthArray.map((item: string) => {
                    return (
                      <li className={styles.list} key={item}>
                        <label className={styles.listLabel} htmlFor={item}>
                          {item}:{" "}
                        </label>
                        <input
                          className={styles.checkBoxChild}
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

          <div className={styles.listContainer}>
            <label className={styles.label} htmlFor="meal">Meal </label>
            <input
              className={styles.checkBoxParent}
              type="checkbox"
              id="meal"
              name="meal"
              onClick={handleMealIsChecked}
            />
            <ul style={{ listStyleType: "none" }} className={styles.checkBoxUl}>
              {mealIsChecked
                ? mealArray.map((item: string) => {
                    return (
                      <li className={styles.list} key={item}>
                        <label className={styles.listLabel} htmlFor={item}>
                          {item}:{" "}
                        </label>
                        <input
                          className={styles.checkBoxChild}
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

          <div className={styles.listContainer}>
            <label className={styles.label} htmlFor="cuisine">Cuisine </label>
            <input
              className={styles.checkBoxParent}
              type="checkbox"
              id="cuisine"
              name="cuisine"
              onClick={handleCuisineIsChecked}
            />
            <ul style={{ listStyleType: "none" }} className={styles.checkBoxUl}>
              {cuisineIsChecked
                ? cuisineArray.map((item: string) => {
                    return (
                      <li className={styles.list} key={item}>
                        <label className={styles.listLabel} htmlFor={item}>
                          {item}:{" "}
                        </label>
                        <input
                          className={styles.checkBoxChild}
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
        </div>

        <div className={styles.btnWrapper}>
          <button type="submit" className={styles.searchBtn}>
            Apply Filters
          </button>
        </div>
      </form>
      <div className={styles.searchResultsContainer}>
        <SearchResults
          diet={diet}
          health={health}
          meal={meal}
          cuisine={cuisine}
        />
      </div>
    </div>
  );
}
