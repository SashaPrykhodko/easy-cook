import { API_BASE_URL } from '../constants';

export async function fetchRecipes() {
  console.log('Fetching recipes from API');
  const res = await fetch(`${API_BASE_URL}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch recipes: ${res.status} ${res.statusText}`);
  }
  return res.json();
}