import "./index.css";
import {DndContext, type DragEndEvent} from "@dnd-kit/core";
import {useSessionStorage} from "../../hook/useSessionStorage.ts";
import {COLUMNS, SESSION_STORE_FAVORITES} from "../../constants.ts";
import type {ColumnType, Recipe} from "../../types/recipe.ts";
import Column from "./Column.tsx";

function RecipeBoard() {
    const [storedRecipes, setStoredRecipes] = useSessionStorage(SESSION_STORE_FAVORITES, []);

    const handleDragEnd = (event: DragEndEvent) => {
        const {active, over} = event;

        if (!over) return;

        const recipeId = active.id;
        const newStatus = String(over.id);

        setStoredRecipes((currentRecipes: Recipe[]) => currentRecipes.map((recipe: Recipe) => (
            recipe.id === recipeId
                ? {
                    ...recipe,
                    status: newStatus,
                }
                : recipe
        )))
    }

    const getRecipesForColumn = (columnId: string) => {
        return storedRecipes.filter((recipe) => recipe.status === columnId);
    };

    return (
        <div className="recipe-board">
            <div className="column-container">
                <DndContext onDragEnd={handleDragEnd}>
                    {COLUMNS.map((column: ColumnType) => (
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