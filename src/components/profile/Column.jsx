import { useDroppable } from "@dnd-kit/core";
import "./index.css";
import RecipeTaskCard from "./RecipeTaskCard";

function Column({ column, recipes }) {
  const { setNodeRef } = useDroppable({ id: column.id });
  return (
    <div className="column">
      <h2 className="h2"> {column.title} </h2>
      <div ref={setNodeRef} className="column-content">
        {recipes.map((recipe) => (
          <RecipeTaskCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Column