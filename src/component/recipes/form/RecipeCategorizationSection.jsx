import {TextField} from "@mui/material";
import {
    NEW_RECIPE_MEAL_TYPE_BTN,
    NEW_RECIPE_MEAL_TYPE_LABEL, NEW_RECIPE_MEAL_TYPES_INPUT_PLACEHOLDER, NEW_RECIPE_TAGS_BTN,
    NEW_RECIPE_TAGS_INPUT_PLACEHOLDER,
    NEW_RECIPE_TAGS_LABEL
} from "../../../constants.ts";

function RecipeCategorizationSection({recipe, handleOnChange}) {
    return (
        <div>
            <div className="form-field">
                <label>{NEW_RECIPE_TAGS_LABEL}</label>
                <TextField
                    fullWidth
                    placeholder={NEW_RECIPE_TAGS_INPUT_PLACEHOLDER}
                    value={recipe.tags}
                    name="tags"
                    onChange={handleOnChange}
                />
                <button className="add-button">
                    {NEW_RECIPE_TAGS_BTN}
                </button>
            </div>

            <div className="form-field">
                <label>{NEW_RECIPE_MEAL_TYPE_LABEL}</label>
                <TextField
                    fullWidth
                    placeholder={NEW_RECIPE_MEAL_TYPES_INPUT_PLACEHOLDER}
                    value={recipe.mealType}
                    name="mealType"
                    onChange={handleOnChange}
                />
                <button className="add-button">
                    {NEW_RECIPE_MEAL_TYPE_BTN}
                </button>
            </div>
        </div>
    );
}

export default RecipeCategorizationSection;