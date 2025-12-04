import RecipeCard from "./RecipeCard";

function RecipeGrid({ recipes }) {
  // console.log('Rendering RecipeGrid with recipes:', recipes);

  return (
    <div className="recipe-grid">
      {recipes.map((r) => (
        <RecipeCard key={r.id} recipe={r} />
      ))}
    </div>
  );
}

export default RecipeGrid