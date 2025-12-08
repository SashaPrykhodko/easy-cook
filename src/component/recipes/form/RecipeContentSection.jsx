import {TextField} from "@mui/material";
import {
    NEW_RECIPE_INGREDIENTS_INPUT_PLACEHOLDER,
    NEW_RECIPE_INGREDIENTS_LABEL, NEW_RECIPE_INSTRUCTIONS_INPUT_PLACEHOLDER,
    NEW_RECIPE_INSTRUCTIONS_LABEL
} from "../../../constants.ts";

function RecipeContentSection({ recipe, handleOnChange, addItem }) {
    return (
        <div>
            <div className="form-field">
                <label>{NEW_RECIPE_INGREDIENTS_LABEL}</label>
                <TextField
                    fullWidth
                    placeholder={NEW_RECIPE_INGREDIENTS_INPUT_PLACEHOLDER}
                    value={recipe.ingredients}
                    name="ingredients"
                    onChange={handleOnChange}
                />
                <button className="add-button">
                    + Add Ingredient
                </button>
            </div>

            <div className="form-field">
                <label>{NEW_RECIPE_INSTRUCTIONS_LABEL}</label>
                <div className="instruction-item">
                    <span className="step-number">1.</span>
                    <TextField
                        fullWidth
                        placeholder={NEW_RECIPE_INSTRUCTIONS_INPUT_PLACEHOLDER}
                        value={recipe.instructions}
                        name="instructions"
                        onChange={handleOnChange}
                    />
                </div>
                <button className="add-button">
                    + Add Instruction
                </button>
            </div>
        </div>
    );
}

export default RecipeContentSection;