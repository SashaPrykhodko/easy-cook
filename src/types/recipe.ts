export interface Recipe {
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
}

export interface RecipeInput {
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