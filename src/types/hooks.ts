import type {Recipe, RecipeInput} from "./recipe.ts";

export type UseRecipesReturn = {
    recipes: Recipe[];
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
}

export type UseAddRecipeReturn = {
    mutateAsync: (recipe: RecipeInput) => Promise<Recipe>;
    isLoading: boolean;
    error: Error | null;
}

export type UseSessionStorageReturn<T> = {
    value: T;
    setValue: (value: T | ((prev: T) => T)) => void;
}