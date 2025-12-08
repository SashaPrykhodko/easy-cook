import type {Recipe, RecipeInput} from "./recipe.ts";

export interface UseRecipesReturn {
    recipes: Recipe[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
}

export interface UseAddRecipeReturn {
    mutateAsync: (recipe: RecipeInput) => Promise<Recipe>;
    isLoading: boolean;
    error: Error | null;
}

export interface UseSessionStorageReturn<T> {
    value: T;
    setValue: (value: T | ((prev: T) => T)) => void;
}