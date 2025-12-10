export type Recipe = {
    id: number;
    name: string;
    caloriesPerServing: number;
    cookTimeMinutes: number;
    cuisine: string;
    difficulty: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    mealType: string[];
    prepTimeMinutes: number;
    rating: number;
    reviewCount: number;
    servings: number;
    tags: string[];
    userId: number;
    status?: string;
    products?: Product[];
}

export type Product = {
    id: string;
    name: string;
}

export type RecipeResponse = {
    limit: number;
    recipes: Recipe[];
    skip: number;
    total: number;
}

export type RecipeInput = {
    name: string;
    calories: number;
    cookTime: number;
    cuisine: string;
    difficulty: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    prepTime: number;
    servings: number;
    tags: string[];
    mealType: string[];
}

export type ColumnType = {
    id: string;
    title: string;
}

export type FilterType = {
    cuisine: string;
    mealType: string;
    difficulty: string;
};