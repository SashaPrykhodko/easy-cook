import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "../index.css";
import {useEffect, useState} from "react";
import RecipeBasicInfoSection from "./RecipeBasicInfoSection.jsx";
import RecipeDetailsSection from "./RecipeDetailsSection.jsx";
import RecipeContentSection from "./RecipeContentSection.jsx";
import RecipeCategorizationSection from "./RecipeCategorizationSection.jsx";

function AddRecipeModal({isOpen, onClose}) {
    let initialState = {
        name: '',
        image: '',
        prepTime: 0,
        cookTime: 0,
        servings: 0,
        calories: 0,
        difficulty: '',
        cuisine: '',
        ingredients: [''],
        instructions: [''],
        tags: [''],
        mealType: ['']
    };
    const [recipe, setRecipe] = useState(initialState);

    useEffect(() => {
        console.log('Recipe updated:', recipe);
    }, [recipe]);

    const handleOnChange = (e) => {
        const {name, value, type} = e.target;
        setRecipe(prev => ({
            ...prev,
            [name]: type === 'number'
                ? Number(value)
                : value
        }));
    }

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
                <CloseIcon/>
            </IconButton>

            <DialogTitle>Add New Recipe</DialogTitle>

            <DialogContent>
                <RecipeBasicInfoSection recipe={recipe} handleOnChange={handleOnChange}/>
                <RecipeDetailsSection recipe={recipe} handleOnChange={handleOnChange}/>
                <RecipeContentSection recipe={recipe} handleOnChange={handleOnChange}/>
                <RecipeCategorizationSection recipe={recipe} handleOnChange={handleOnChange}/>
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