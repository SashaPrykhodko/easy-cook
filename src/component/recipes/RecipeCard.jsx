import {
    ADD_TO_FAVORITES,
    COOKING_TIME_FIELD_LABEL,
    DIFFICULTY_FIELD_LABEL,
    IMAGE_PLACEHOLDER, SESSION_STORE_FAVORITES
} from "../../constants";
import {useSessionStorage} from "../../hook/useSessionStorage.js";
import "./index.css";

function RecipeCard({recipe}) {

    const [storedRecipes, setStoredRecipes] = useSessionStorage(SESSION_STORE_FAVORITES, []);
    const recipeId = recipe.id;
    const title = recipe.name || 'Untitled';
    const difficulty = recipe.difficulty || 'Unknown';
    const image = recipe.image || IMAGE_PLACEHOLDER;
    const cookingTime = (recipe.cookTimeMinutes && recipe.prepTimeMinutes)
        ? `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins` : 'N/A';

    const handleAddRecipe = (recipe) => {
        setStoredRecipes(currentRecipes => {
            if (currentRecipes.some(r => r.id === recipeId)) return currentRecipes;
            const newRecipe = {...recipe, status: 'NOT COOKED YET'};
            return [...currentRecipes, newRecipe];
        });
    }

    return (
        <div className="recipe-card">
            <img src={image} alt="Recipe Image"/>
            <button onClick={() => handleAddRecipe(recipe)}>
                {ADD_TO_FAVORITES}
            </button>
            <h3>{title}</h3>
            <p> {DIFFICULTY_FIELD_LABEL} {difficulty}</p>
            <p> {COOKING_TIME_FIELD_LABEL} {cookingTime}</p>
        </div>
    );
}

export default RecipeCard