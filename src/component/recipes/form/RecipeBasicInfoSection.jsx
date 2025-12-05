import {TextField} from "@mui/material";

function RecipeBasicInfoSection({recipe, handleOnChange}) {
    return (
        <div>
            <div className="form-field">
                <label>Recipe Name</label>
                <TextField
                    fullWidth
                    placeholder="Enter recipe name"
                    value={recipe.name}
                    name="name"
                    onChange={handleOnChange}
                />
            </div>

            <div className="form-field">
                <label>Image URL</label>
                <TextField
                    fullWidth
                    placeholder="https://example.com/image.jpg"
                    value={recipe.image}
                    name="image"
                    onChange={handleOnChange}
                />
            </div>
        </div>
    );
}

export default RecipeBasicInfoSection;