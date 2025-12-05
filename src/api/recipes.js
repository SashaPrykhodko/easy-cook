import {API_BASE_URL} from '../constants';

export async function fetchRecipes() {
    console.log('Fetching recipes from API');
    const res = await fetch(`${API_BASE_URL}`);
    if (!res.ok) {
        throw new Error(`Failed to fetch recipes: ${res.status} ${res.statusText}`);
    }
    return res.json();
}

export const submitRecipe = async (recipe) => {
    const response = await fetch(`${API_BASE_URL}/add`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(recipe),
    });

    if (!response.ok) {
        throw new Error('Failed to create recipe');
    }
    return response.json();
}
