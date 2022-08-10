import type { NextApiRequest, NextApiResponse } from 'next'

export async function RecipeAPI(
  diet: string,
  health: string,
  cuisine: string,
  meal: string
) {
  const API_KEY = process.env.API_KEY;
  const ID = process.env.API_ID;
  const DIET = diet ? diet : null;
  const HEALTH = health ? health : null;
  const CUISINE = cuisine ? cuisine : null;
  const MEAL = meal ? meal : null;

  const response = await fetch(
    `https://api.edamam.com/api/recipes/v2?
		type=public
		&q=all
		&app_id=${ID}
		&app_key=%${API_KEY}
		${DIET !== null ? DIET : ""}
		${HEALTH !== null ? HEALTH : ""}
		${CUISINE !== null ? CUISINE : ""}
		${MEAL !== null ? MEAL : ""}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    return {
      notFound: false,
      data: data,
    };
  }
}


export default function handler(req: any, res: any) {
	if (req.method === 'GET') {
		// Process a GET request

	} else {
		// Handle any other HTTP method
	}
}

