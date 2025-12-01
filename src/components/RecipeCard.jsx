import { IMAGE_PLACEHOLDER } from "../constants";

function RecipeCard({ recipe }) {
  const title = recipe.name || 'Untitled';
  const difficulty = recipe.difficulty || 'Unknown';
  const image = recipe.image || IMAGE_PLACEHOLDER;
  const cookingTime = (recipe.cookTimeMinutes && recipe.prepTimeMinutes)
    ? `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins` : 'N/A';

  const handleClick = () => {
    console.log(`Added "${title}" to Recipe Book!`);
  }

  return (
    <div className="recipe-card">
      <img src={image} alt="Recipe Image" />
      <button onClick={handleClick}>Add to Recipe Book</button>
      <h3>{title}</h3>
      <p> Difficulty: {difficulty}</p>
      <p> Cooking Time: {cookingTime}</p>
    </div>
  );
}

export default RecipeCard