import {TextField} from "@mui/material";

function RecipeContentSection({ recipe, handleOnChange, addItem }) {
    return (
        <div>
            <div className="form-field">
                <label>Ingredients</label>
                <TextField
                    fullWidth
                    placeholder="Enter ingredient"
                    value={recipe.ingredients}
                    name="ingredients"
                    onChange={handleOnChange}
                />
                <button className="add-button">
                    + Add Ingredient
                </button>
            </div>

            <div className="form-field">
                <label>Instructions</label>
                <div className="instruction-item">
                    <span className="step-number">1.</span>
                    <TextField
                        fullWidth
                        placeholder="Enter instruction step"
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