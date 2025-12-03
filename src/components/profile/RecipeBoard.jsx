import Column from "./Column"
import "./index.css";
import {DndContext} from "@dnd-kit/core";
import {useSessionStorage} from "../../hooks/useSessionStorage.js";

const COLUMNS = [
    {id: "NOT COOKED YET", title: "Not Cooked Yet"},
    {id: "READY TO BE COOKED", title: "Ready To Be Cooked"},
    {id: "REVIEW", title: "Review"}
];

function RecipeBoard() {


    const [storedRecipes, setStoredRecipes] = useSessionStorage("favorites", []);

    const handleDragEnd = event => {
        const {active, over} = event;

        if (!over) return;

        const recipeId = active.id;
        const newStatus = over.id;

        setStoredRecipes((currentRecipes) => currentRecipes.map((recipe) => (
            recipe.id === recipeId
                ? {
                    ...recipe,
                    status: newStatus,
                }
                : recipe
        )))
    }

    const getRecipesForColumn = (columnId) => {
        return storedRecipes.filter((recipe) => recipe.status === columnId);
    };

    return (
        <div className="recipe-board">
            <div className="column-container">
                <DndContext onDragEnd={handleDragEnd}>
                    {COLUMNS.map((column) => (
                        <Column key={column.id}
                                column={column}
                                recipes={getRecipesForColumn(column.id)}
                        />
                    ))}
                </DndContext>
            </div>
        </div>
    )
}

export default RecipeBoard