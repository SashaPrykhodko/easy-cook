import {useMutation, useQuery} from '@tanstack/react-query'
import {fetchRecipes, submitRecipe} from '../api/recipes.js'
import {useSessionStorage} from "./useSessionStorage.js";
import {useEffect} from 'react';
import {SESSION_STORE_ALL_RECIPES} from "../constants.js";

export function useRecipes() {
    const [allRecipes, setAllRecipes] = useSessionStorage(SESSION_STORE_ALL_RECIPES, []);

    const query = useQuery({
        queryKey: ['recipes'],
        queryFn: fetchRecipes,
    });

    useEffect(() => {
        if (query.data && allRecipes.length === 0) {
            setAllRecipes(query.data.recipes);
            console.log('Recipes loaded to sessionStorage: ', query.data);
        }
    }, [query.data, setAllRecipes, allRecipes.length]);

    return {
        ...query,
        recipes: allRecipes,
    };
}

export function useAddRecipe() {
    const [allRecipes, setAllRecipes] = useSessionStorage(SESSION_STORE_ALL_RECIPES, []);
    return useMutation({
        mutationFn: submitRecipe,
        onSuccess: (data) => {
            setAllRecipes(prev => {
                const maxId = prev.length > 0 ? Math.max(...prev.map(recipe => recipe.id)) + 1: 0;
                const recipeWithNewId = {...data, id: maxId};
                return [...prev, recipeWithNewId];
            })
        }
    })
}