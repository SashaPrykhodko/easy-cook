import RecipeCard from "./RecipeCard.tsx";
import "./index.css";
import type {Recipe} from "../../types/recipe.ts";

function RecipeGrid({recipes}: { recipes: Recipe[] }) {
    return (
        <div className="recipe-grid">
            {recipes.map((r) => (
                <RecipeCard key={r.id} recipe={r}/>
            ))}
        </div>
    );
}

export default RecipeGrid