import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./index.css";

function AddRecipeModal({isOpen, onClose}) {
    return (
        <Dialog
            className="add-recipe-dialog"
            open={isOpen}
            onClose={onClose}
            maxWidth="md"
            fullWidth>

            <IconButton
                className="close-button"
                onClick={onClose}>
                <CloseIcon />
            </IconButton>

            <DialogTitle>Add New Recipe</DialogTitle>

            <DialogContent>
                <div className="form-field">
                    <label>Recipe Name</label>
                    <TextField
                        fullWidth
                        placeholder="Enter recipe name"
                    />
                </div>

                <div className="form-field">
                    <label>Image URL</label>
                    <TextField
                        fullWidth
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <label>Prep Time (minutes)</label>
                        <TextField
                            type="number"
                            placeholder="0"
                        />
                    </div>
                    <div className="form-field">
                        <label>Cook Time (minutes)</label>
                        <TextField
                            type="number"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <label>Servings</label>
                        <TextField
                            type="number"
                            placeholder="1"
                        />
                    </div>
                    <div className="form-field">
                        <label>Calories per Serving</label>
                        <TextField
                            type="number"
                            placeholder="0"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-field">
                        <label>Difficulty</label>
                        <TextField
                            select
                            SelectProps={{ native: true }}
                            defaultValue="Easy">
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                        </TextField>
                    </div>
                    <div className="form-field">
                        <label>Cuisine</label>
                        <TextField
                            placeholder="e.g., Italian, Mexican, Chinese"
                        />
                    </div>
                </div>

                <div className="form-field">
                    <label>Ingredients</label>
                    <TextField
                        fullWidth
                        placeholder="Enter ingredient"
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
                        />
                    </div>
                    <button className="add-button">
                        + Add Instruction
                    </button>
                </div>

                <div className="form-field">
                    <label>Tags</label>
                    <TextField
                        fullWidth
                        placeholder="Enter tag"
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
                    />
                    <button className="add-button">
                        + Add Meal Type
                    </button>
                </div>
            </DialogContent>

            <DialogActions className="dialog-actions">
                <Button onClick={onClose} variant="outlined">
                    Cancel
                </Button>
                <Button variant="contained">
                    Save Recipe
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddRecipeModal;