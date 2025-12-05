import {useMutation, useQuery} from '@tanstack/react-query'
import {fetchRecipes, submitRecipe} from '../api/recipes.js'

export function useRecipes() {
  return useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
  })
}

export function useAddRecipe() {
    return useMutation({
        mutationFn: submitRecipe,
        onSuccess: (data) => {
            // console.log("Successfully added", data);
        }
    })
}