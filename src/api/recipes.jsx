export async function fetchRecipes() {
  console.log('Fetching recipes from API');
  const res = await fetch('https://dummyjson.com/recipes/');
  if (!res.ok) {
    throw new Error(`Failed to fetch recipes: ${res.status} ${res.statusText}`);
  }
  return res.json();
}