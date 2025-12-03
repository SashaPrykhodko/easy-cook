import { useState } from "react";
import Column from "./Column"
import "./index.css";
import { DndContext } from "@dnd-kit/core";

const COLUMNS = [
  { id: "NOT COOKED YET", title: "Not Cooked Yet" },
  { id: "READY TO BE COOKED", title: "Ready To Be Cooked" },
  { id: "REVIEW", title: "Review" }
];

function RecipeBoard() {

  const [recipes, setRecipes] = useState(() => {
    return JSON.parse(sessionStorage.getItem('favorites')) || [];
  });

  const refreshRecipes = () => {
      console.log('Refreshing recipes');
      setRecipes(JSON.parse(sessionStorage.getItem('favorites')) || []);
      console.log(recipes);
  }

  const handleDragEnd = event => {
    const { active, over } = event;

    if (!over) return;

    const recipeId = active.id;
    const newStatus = over.id;

    setRecipes(() => recipes.map((recipe) => (
      recipe.id === recipeId
        ? {
          ...recipe,
          status: newStatus,
        }
        : recipe
    )))
  }


    const getRecipesForColumn = (columnId) => {
        return recipes.filter((recipe) => recipe.status === columnId);
    };

    return (
        <div className="recipe-board">
            <div className="column-container">
                <DndContext onDragEnd={handleDragEnd}>
                    {COLUMNS.map((column) => (
                        <Column key={column.id}
                                column={column}
                                recipes={getRecipesForColumn(column.id)}
                                onRecipesChange={refreshRecipes}
                        />
                    ))}
                </DndContext>
            </div>
        </div>
    )
}

export default RecipeBoard