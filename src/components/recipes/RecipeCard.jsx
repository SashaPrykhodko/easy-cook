import {IMAGE_PLACEHOLDER} from "../../constants";
import {useSessionStorage} from "../../hooks/useSessionStorage.js";

function RecipeCard({recipe}) {

    const [storedRecipes, setStoredRecipes] = useSessionStorage("favorites", []);
    const recipeId = recipe.id;
    const title = recipe.name || 'Untitled';
    const difficulty = recipe.difficulty || 'Unknown';
    const image = recipe.image || IMAGE_PLACEHOLDER;
    const cookingTime = (recipe.cookTimeMinutes && recipe.prepTimeMinutes)
        ? `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins` : 'N/A';

    const handleAddRecipe = (recipe) => {
        if (storedRecipes.some(r => r.id === recipeId)) return;

        const newRecipe = {...recipe, status: 'NOT COOKED YET'};
        setStoredRecipes([...storedRecipes, newRecipe]);
    }

    return (
        <div className="recipe-card">
            <img src={image} alt="Recipe Image"/>
            <button onClick={() => handleAddRecipe(recipe)}>
                Add to Recipe Book
            </button>
            <h3>{title}</h3>
            <p> Difficulty: {difficulty}</p>
            <p> Cooking Time: {cookingTime}</p>
        </div>
    );
}

export default RecipeCard