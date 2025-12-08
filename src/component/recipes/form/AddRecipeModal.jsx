import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import RecipeBasicInfoSection from "./RecipeBasicInfoSection.jsx";
import RecipeDetailsSection from "./RecipeDetailsSection.jsx";
import RecipeContentSection from "./RecipeContentSection.jsx";
import RecipeCategorizationSection from "./RecipeCategorizationSection.jsx";
import {useAddRecipe} from "../../../hook/useRecipes.ts";
import "./index.css";
import {ADD_NEW_RECIPE_BTN, CANCEL_RECIPE_BTN, SAVE_RECIPE_BTN} from "../../../constants.ts";

const initialState = {
    name: '',
    image: '',
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    difficulty: '',
    cuisine: '',
    ingredients: [''],
    instructions: [''],
    tags: [''],
    mealType: ['']
};

function AddRecipeModal({isOpen, onClose, onSubmit}) {
    const [recipe, setRecipe] = useState(initialState);

    useEffect(() => {
        console.log('Recipe updated:', recipe);
    }, [recipe]);

    const {mutateAsync: addRecipeMutation} = useAddRecipe();

    const handleOnChange = (e) => {
        const {name, value, type} = e.target;
        setRecipe(prev => ({
            ...prev,
            [name]: type === 'number'
                ? Number(value)
                : value
        }));
    }

    const handleSubmit = async () => {
        try {
            await addRecipeMutation(recipe);
            onSubmit();
        } catch (error) {
            console.log(error);
        }
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

            <DialogTitle>{ADD_NEW_RECIPE_BTN}</DialogTitle>

            <DialogContent>
                <RecipeBasicInfoSection recipe={recipe} handleOnChange={handleOnChange}/>
                <RecipeDetailsSection recipe={recipe} handleOnChange={handleOnChange}/>
                <RecipeContentSection recipe={recipe} handleOnChange={handleOnChange}/>
                <RecipeCategorizationSection recipe={recipe} handleOnChange={handleOnChange}/>
            </DialogContent>

            <DialogActions className="dialog-actions">
                <Button onClick={onClose} variant="outlined">
                    {CANCEL_RECIPE_BTN}
                </Button>
                <Button
                    variant="contained"
                    onClick={handleSubmit}>
                    {SAVE_RECIPE_BTN}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default AddRecipeModal;