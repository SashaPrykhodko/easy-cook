import {TextField} from "@mui/material";
import {
    NEW_RECIPE_CALORIES_INPUT_PLACEHOLDER,
    NEW_RECIPE_CALORIES_LABEL,
    NEW_RECIPE_COOK_TIME_INPUT_PLACEHOLDER,
    NEW_RECIPE_COOK_TIME_LABEL,
    NEW_RECIPE_PREP_TIME_INPUT_PLACEHOLDER,
    NEW_RECIPE_PREP_TIME_LABEL,
    NEW_RECIPE_SERVING_INPUT_PLACEHOLDER,
    NEW_RECIPE_SERVING_LABEL
} from "../../../constants.ts";
import * as React from "react";

type RecipeDetailsSectionProps = {
    recipe: {
        prepTime: number;
        cookTime: number;
        servings: number;
        calories: number;
        difficulty: string;
        cuisine: string;
    },
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RecipeDetailsSection({recipe, handleOnChange}: RecipeDetailsSectionProps) {
    return (
        <div>
            <div className="form-row">
                <div className="form-field">
                    <label>{NEW_RECIPE_PREP_TIME_LABEL}</label>
                    <TextField
                        type="number"
                        placeholder={NEW_RECIPE_PREP_TIME_INPUT_PLACEHOLDER}
                        value={recipe.prepTime}
                        name="prepTime"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-field">
                    <label>{NEW_RECIPE_COOK_TIME_LABEL}</label>
                    <TextField
                        type="number"
                        placeholder={NEW_RECIPE_COOK_TIME_INPUT_PLACEHOLDER}
                        value={recipe.cookTime}
                        name="cookTime"
                        onChange={handleOnChange}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-field">
                    <label>{NEW_RECIPE_SERVING_LABEL}</label>
                    <TextField
                        type="number"
                        placeholder={NEW_RECIPE_SERVING_INPUT_PLACEHOLDER}
                        value={recipe.servings}
                        name="servings"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-field">
                    <label>{NEW_RECIPE_CALORIES_LABEL}</label>
                    <TextField
                        type="number"
                        placeholder={NEW_RECIPE_CALORIES_INPUT_PLACEHOLDER}
                        value={recipe.calories}
                        name="calories"
                        onChange={handleOnChange}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-field">
                    <label>Difficulty</label>
                    <TextField
                        select
                        SelectProps={{native: true}}
                        value={recipe.difficulty}
                        name="difficulty"
                        onChange={handleOnChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </TextField>
                </div>
                <div className="form-field">
                    <label>Cuisine</label>
                    <TextField
                        placeholder="e.g., Italian, Mexican, Chinese"
                        value={recipe.cuisine}
                        name="cuisine"
                        onChange={handleOnChange}
                    />
                </div>
            </div>

        </div>
    );
}

export default RecipeDetailsSection;