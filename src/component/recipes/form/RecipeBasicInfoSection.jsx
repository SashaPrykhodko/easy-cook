import {TextField} from "@mui/material";
import {
    NEW_RECIPE_IMG_INPUT_PLACEHOLDER,
    NEW_RECIPE_IMG_LABEL,
    NEW_RECIPE_NAME_INPUT_PLACEHOLDER,
    NEW_RECIPE_NAME_LABEL
} from "../../../constants.js";

function RecipeBasicInfoSection({recipe, handleOnChange}) {
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