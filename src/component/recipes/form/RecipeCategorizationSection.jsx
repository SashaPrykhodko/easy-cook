import {TextField} from "@mui/material";

function RecipeCategorizationSection({recipe, handleOnChange}) {
    return (
        <div>
            <div className="form-field">
                <label>Tags</label>
                <TextField
                    fullWidth
                    placeholder="Enter tag"
                    value={recipe.tags}
                    name="tags"
                    onChange={handleOnChange}
                />
                <button className="add-button">
                    + Add Tag
                </button>
            </div>

            <div className="form-field">
                <label>Meal Type</label>
                <TextField
                    fullWidth
                    placeholder="e.g., Breakfast, Lunch, Dinner"
                    value={recipe.mealType}
                    name="mealType"
                    onChange={handleOnChange}
                />
                <button className="add-button">
                    + Add Meal Type
                </button>
            </div>
        </div>
    );
}

export default RecipeCategorizationSection;