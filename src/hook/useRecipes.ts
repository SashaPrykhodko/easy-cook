import {useMutation, useQuery} from '@tanstack/react-query'
import {fetchRecipes, submitRecipe} from '../api/recipes.ts'
import {useSessionStorage} from "./useSessionStorage.ts";
import {useEffect} from 'react';
import {SESSION_STORE_ALL_RECIPES} from "../constants.ts";
import type {UseRecipesReturn} from "../types/hooks.ts";
import type {Recipe, RecipeResponse} from "../types/recipe.ts";

export function useRecipes(): UseRecipesReturn {
    const [allRecipes, setAllRecipes] = useSessionStorage(SESSION_STORE_ALL_RECIPES, []);

    const query = useQuery<RecipeResponse>({
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
        recipes: allRecipes,
        isLoading: query.isLoading,
        isError: query.isError,
        error: query.error
    };
}

export function useAddRecipe() {
    const [, setAllRecipes] = useSessionStorage(SESSION_STORE_ALL_RECIPES, []);
    return useMutation({
        mutationFn: submitRecipe,
        onSuccess: (data: Recipe) => {
            setAllRecipes((prev: Recipe[]) => {
                const maxId = prev.length > 0 ? Math.max(...prev.map(recipe => recipe.id)) + 1: 0;
                const recipeWithNewId = {...data, id: maxId};
                return [...prev, recipeWithNewId];
            })
        }
    })
}