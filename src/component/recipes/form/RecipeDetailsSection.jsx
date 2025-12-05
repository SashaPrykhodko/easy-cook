import {TextField} from "@mui/material";

function RecipeDetailsSection({recipe, handleOnChange}) {
    return (
        <div>
            <div className="form-row">
                <div className="form-field">
                    <label>Prep Time (minutes)</label>
                    <TextField
                        type="number"
                        placeholder="0"
                        value={recipe.prepTime}
                        name="prepTime"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-field">
                    <label>Cook Time (minutes)</label>
                    <TextField
                        type="number"
                        placeholder="0"
                        value={recipe.cookTime}
                        name="cookTime"
                        onChange={handleOnChange}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-field">
                    <label>Servings</label>
                    <TextField
                        type="number"
                        placeholder="1"
                        value={recipe.servings}
                        name="servings"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="form-field">
                    <label>Calories per Serving</label>
                    <TextField
                        type="number"
                        placeholder="0"
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