import {API_BASE_URL} from '../constants.ts';
import type {Recipe, RecipeInput, RecipeResponse} from "../types/recipe.ts";

export async function fetchRecipes(): Promise<RecipeResponse> {
    console.log('Fetching recipes from API');
    const res = await fetch(`${API_BASE_URL}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch recipes: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

export const submitRecipe = async (newRecipe: RecipeInput): Promise<Recipe> => {
    const response = await fetch(`${API_BASE_URL}/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newRecipe),
    });

    if (!response.ok) {
        throw new Error('Failed to create recipe');
    }
    return response.json();
}
