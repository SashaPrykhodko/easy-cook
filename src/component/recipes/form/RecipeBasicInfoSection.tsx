import {TextField} from "@mui/material";
import {
    NEW_RECIPE_IMG_INPUT_PLACEHOLDER,
    NEW_RECIPE_IMG_LABEL,
    NEW_RECIPE_NAME_INPUT_PLACEHOLDER,
    NEW_RECIPE_NAME_LABEL
} from "../../../constants.ts";
import * as React from "react";

type RecipeBasicInfoSectionProps = {
    recipe: {
        name: string,
        image: string,
    }
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RecipeBasicInfoSection({recipe, handleOnChange}: RecipeBasicInfoSectionProps) {
    return (
        <div>
            <div className="form-field">
                <label>{NEW_RECIPE_NAME_LABEL}</label>
                <TextField
                    fullWidth
                    placeholder={NEW_RECIPE_NAME_INPUT_PLACEHOLDER}
                    value={recipe.name}
                    name="name"
                    onChange={handleOnChange}
                />
            </div>

            <div className="form-field">
                <label>{NEW_RECIPE_IMG_LABEL}</label>
                <TextField
                    fullWidth
                    placeholder={NEW_RECIPE_IMG_INPUT_PLACEHOLDER}
                    value={recipe.image}
                    name="image"
                    onChange={handleOnChange}
                />
            </div>
        </div>
    );
}

export default RecipeBasicInfoSection;