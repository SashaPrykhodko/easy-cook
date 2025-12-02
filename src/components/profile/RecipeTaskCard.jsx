import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";

import "./index.css";
import {IMAGE_PLACEHOLDER} from "../../constants.js";

function RecipeTaskCard({recipe}) {
    const {attributes, listeners, setNodeRef, transform} =
        useDraggable({id: recipe.id});

    const title = recipe.name || 'Untitled';
    const difficulty = recipe.difficulty || 'Unknown';
    const image = recipe.image || IMAGE_PLACEHOLDER;
    const cookingTime = (recipe.cookTimeMinutes && recipe.prepTimeMinutes)
        ? `${recipe.prepTimeMinutes + recipe.cookTimeMinutes} mins` : 'N/A';
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
            <div className="recipe-card">
                <img src={image} alt="Recipe Image"/>
                <h3>{title}</h3>
                <p> Difficulty: {difficulty}</p>
                <p> Cooking Time: {cookingTime}</p>
            </div>
        </div>
    )
}

export default RecipeTaskCard