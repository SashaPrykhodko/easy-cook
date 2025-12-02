import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import "./index.css";

function RecipeTaskCard({ recipe }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: recipe.id });

  const style = transform ? {
    transform: CSS.Transform.toString(transform)
  } : undefined;

  return (
    <div
      className="recipe-task"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      <h3>{recipe.name}</h3>
    </div>
  )
}

export default RecipeTaskCard