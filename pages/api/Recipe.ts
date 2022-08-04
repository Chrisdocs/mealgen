export async function RecipeAPI(diet: string, health: string, cuisine: string, meal: string) {
	const API_KEY = process.env.API_KEY;
	const ID = process.env.API_ID;
	const DIET = diet;
	const HEALTH = health;
	const CUISINE = cuisine;
	const MEAL = meal;

	const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=all&app_id=${ID}&app_key=%${API_KEY}&diet=${DIET}&health=${HEALTH}&cuisineType=${CUISINE}&mealType=${MEAL}`);
	const data = await response.json();

	if (!data) {
		return {
			notFound: true,
		}
	} else {
		return {
			notFound: false,
			data: data,
		}
	}

}