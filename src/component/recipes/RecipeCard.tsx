import {
    ADD_TO_FAVORITES,
    COOKING_TIME_FIELD_LABEL,
    DIFFICULTY_FIELD_LABEL,
    IMAGE_PLACEHOLDER,
    SESSION_STORE_FAVORITES
} from "../../constants.ts";
import {useSessionStorage} from "../../hook/useSessionStorage.ts";
import "./index.css";
import type {Recipe} from "../../types/recipe.ts";

function RecipeCard({recipe}: { recipe: Recipe }) {

    const [, setStoredRecipes] = useSessionStorage(SESSION_STORE_FAVORITES, []);
    const recipeId = recipe.id;
    const title = recipe.name || 'Untitled';
    const difficulty = recipe.difficulty || 'Unknown';
    const image = recipe.image || IMAGE_PLACEHOLDER;
    const cookingTime = (recipe.cookTimeMinutes && recipe.prepTimeMinutes)
        ? `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins` : 'N/A';

    const handleAddRecipe = (recipe: Recipe) => {
        setStoredRecipes((currentRecipes) => {
            if (currentRecipes.some(r => r.id === recipeId)) return currentRecipes;
            const newRecipe: Recipe = {...recipe, status: 'NOT COOKED YET'};
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