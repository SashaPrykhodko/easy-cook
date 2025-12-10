import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import * as React from "react";
import {useEffect, useState} from "react";
import RecipeBasicInfoSection from "./RecipeBasicInfoSection.tsx";
import RecipeDetailsSection from "./RecipeDetailsSection.tsx";
import RecipeContentSection from "./RecipeContentSection.tsx";
import RecipeCategorizationSection from "./RecipeCategorizationSection.tsx";
import {useAddRecipe} from "../../../hook/useRecipes.ts";
import "./index.css";
import {ADD_NEW_RECIPE_BTN, CANCEL_RECIPE_BTN, SAVE_RECIPE_BTN} from "../../../constants.ts";
import type {RecipeInput} from "../../../types/recipe.ts";

const initialState: RecipeInput = {
    name: '',
    image: '',
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    difficulty: '',
    calories: 0,
    cuisine: '',
    ingredients: [''],
    instructions: [''],
    tags: [''],
    mealType: ['']
};

type AddRecipeModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
};

function AddRecipeModal({isOpen, onClose, onSubmit}: AddRecipeModalProps) {
    const [newRecipe, setNewRecipe] = useState<RecipeInput>(initialState);

    useEffect(() => {
        console.log('Recipe updated:', newRecipe);
    }, [newRecipe]);

    const {mutateAsync: addRecipeMutation} = useAddRecipe();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value, type} = e.target;
        setNewRecipe(prev => ({
            ...prev,
            [name]: type === 'number'
                ? Number(value)
                : value
        }));
    }

    const handleSubmit = async () => {
        try {
            await addRecipeMutation(newRecipe);
            onSubmit();
        } catch (error) {
            console.log(error instanceof Error ? error.message : 'Unknown error');
        }
    }

    const handleOnClose = () => {
        setNewRecipe(initialState);
        onClose();
    };

    return (
        <Dialog
            className="add-recipe-dialog"
            open={isOpen}
            onClose={handleOnClose}
            maxWidth="md"
            fullWidth>

            <IconButton
                className="close-button"
                onClick={onClose}>
                <CloseIcon/>
            </IconButton>

            <DialogTitle>{ADD_NEW_RECIPE_BTN}</DialogTitle>

            <DialogContent>
                <RecipeBasicInfoSection recipe={newRecipe} handleOnChange={handleOnChange}/>
                <RecipeDetailsSection recipe={newRecipe} handleOnChange={handleOnChange}/>
                <RecipeContentSection recipe={newRecipe} handleOnChange={handleOnChange}/>
                <RecipeCategorizationSection recipe={newRecipe} handleOnChange={handleOnChange}/>
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