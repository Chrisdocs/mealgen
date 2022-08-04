import { useState } from "react";

export default function Search() {
  const [dietIsChecked, setDietIsChecked] = useState(false);
  const [healthIsChecked, setHealthIsChecked] = useState(false);
	const [mealIsChecked, setMealIsChecked] = useState(false);
	const [cuisineIsChecked, setCuisineIsChecked] = useState(false);

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

  return (
    <div>
      <form>

        <div>
          <label htmlFor="Diet">Diet</label>
          <input
            type="checkbox"
            name="Diet"
            id="diet"
            onClick={handleDietIsChecked}
          />
          {dietIsChecked ? (
            <div>
              <label htmlFor="first">first: </label>
              <input type="checkbox" id="first" name="first" />
            </div>
          ) : null}
        </div>

        <div>
          <label htmlFor="health">Health </label>
          <input
            type="checkbox"
            id="health"
            name="health"
            onClick={handleHealthChecked}
          />
          {healthIsChecked ? (
            <div>
              <label htmlFor="first">Second: </label>
              <input type="checkbox" id="second" name="second" />
            </div>
          ) : null}
        </div>

				<div>
          <label htmlFor="health">Meal </label>
          <input
            type="checkbox"
            id="health"
            name="health"
            onClick={handleMealIsChecked}
          />
          {mealIsChecked ? (
            <div>
              <label htmlFor="first">Third: </label>
              <input type="checkbox" id="second" name="second" />
            </div>
          ) : null}
        </div>

				<div>
          <label htmlFor="health">Cuisine </label>
          <input
            type="checkbox"
            id="health"
            name="health"
            onClick={handleCuisineIsChecked}
          />
          {cuisineIsChecked ? (
            <div>
              <label htmlFor="first">Forth: </label>
              <input type="checkbox" id="second" name="second" />
            </div>
          ) : null}
        </div>

      </form>
    </div>
  );
}
