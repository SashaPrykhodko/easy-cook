import { useState } from "react";
import { IMAGE_PLACEHOLDER } from "../../constants";

function RecipeCard({ recipe }) {
  const recipeId = recipe.id;
  const title = recipe.name || 'Untitled';
  const difficulty = recipe.difficulty || 'Unknown';
  const image = recipe.image || IMAGE_PLACEHOLDER;
  const cookingTime = (recipe.cookTimeMinutes && recipe.prepTimeMinutes)
    ? `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins` : 'N/A';

  const handleAddRecipe = (recipe) => {
    console.log(`Added ${recipeId} to Recipe Book!`);
    const stored = sessionStorage.getItem('favorites');
    const recipeBook = stored ? JSON.parse(stored) : [];
    const newRecipe = { ...recipe, status: 'NOT COOKED YET' };
    const updated = [...recipeBook, newRecipe];

    sessionStorage.setItem('favorites', JSON.stringify(updated));
  }

  return (
    <div className="recipe-card">
      <img src={image} alt="Recipe Image" />
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