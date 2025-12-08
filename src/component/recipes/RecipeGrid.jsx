import RecipeCard from "./RecipeCard";
import "./index.css";

function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}

export default RecipeGrid