// API URLs
import type {ColumnType, FilterType} from "./types/recipe.ts";

export const API_BASE_URL = 'https://dummyjson.com/recipes/';
export const IMAGE_PLACEHOLDER = '/no-image-available.jpg';

//SESSION_STORAGE
export const SESSION_STORE_FAVORITES = 'favorites';
export const SESSION_STORE_ALL_RECIPES = 'allRecipes';

// Filter options
export const SEARCH_RECIPES_PLACEHOLDER = 'Search recipes...';

export const CUISINE_OPTIONS = [
    {value: 'all', label: 'All'},
    {value: 'italian', label: 'Italian'},
    {value: 'mexican', label: 'Mexican'},
    {value: 'chinese', label: 'Chinese'}
];

export const MEAL_TYPE_OPTIONS = [
    {value: 'all', label: 'All'},
    {value: 'breakfast', label: 'Breakfast'},
    {value: 'lunch', label: 'Lunch'},
    {value: 'dinner', label: 'Dinner'},
];

export const DIFFICULTY_OPTIONS = [
    {value: 'all', label: 'All'},
    {value: 'easy', label: 'Easy'},
    {value: 'medium', label: 'Medium'},
    {value: 'hard', label: 'Hard'},
];

// Recipe card constants
export const ADD_TO_FAVORITES = 'Add to Recipe Book';
export const DIFFICULTY_FIELD_LABEL = 'Difficulty:'
export const COOKING_TIME_FIELD_LABEL = 'Cooking Time:'

//Add recipe
export const ADD_NEW_RECIPE_BTN = 'Add New Recipe';
export const SAVE_RECIPE_BTN = 'Save Recipe';
export const CANCEL_RECIPE_BTN = 'Cancel';

export const NEW_RECIPE_NAME_LABEL = 'Recipe Name';
export const NEW_RECIPE_NAME_INPUT_PLACEHOLDER = 'New Recipe Name';
export const NEW_RECIPE_IMG_LABEL = 'Image URL';
export const NEW_RECIPE_IMG_INPUT_PLACEHOLDER = 'https://example.com/image.jpg';

export const NEW_RECIPE_TAGS_LABEL = 'Tags';
export const NEW_RECIPE_TAGS_INPUT_PLACEHOLDER = 'Enter Tag';
export const NEW_RECIPE_TAGS_BTN = '+ Add Tag';
export const NEW_RECIPE_MEAL_TYPE_LABEL = 'Meal Types';
export const NEW_RECIPE_MEAL_TYPES_INPUT_PLACEHOLDER = 'e.g., Breakfast, Lunch, Dinner';
export const NEW_RECIPE_MEAL_TYPE_BTN = '+ Meal Type';

export const NEW_RECIPE_INGREDIENTS_LABEL = 'Ingredients';
export const NEW_RECIPE_INGREDIENTS_INPUT_PLACEHOLDER = 'Enter ingredient';

export const NEW_RECIPE_INSTRUCTIONS_LABEL = 'Instructions';
export const NEW_RECIPE_INSTRUCTIONS_INPUT_PLACEHOLDER = 'Enter Instruction Step';

export const NEW_RECIPE_PREP_TIME_LABEL = 'Prep Time (minutes)';
export const NEW_RECIPE_PREP_TIME_INPUT_PLACEHOLDER = 'Enter Instruction Step';

export const NEW_RECIPE_COOK_TIME_LABEL = 'Cook Time (minutes)';
export const NEW_RECIPE_COOK_TIME_INPUT_PLACEHOLDER = 'Enter Instruction Step';

export const NEW_RECIPE_SERVING_LABEL = 'Servings';
export const NEW_RECIPE_SERVING_INPUT_PLACEHOLDER = '1';

export const NEW_RECIPE_CALORIES_LABEL = 'Calories per Serving';
export const NEW_RECIPE_CALORIES_INPUT_PLACEHOLDER = '0';

//Profile
export const ADD_GROCERY_LIST_BTN = 'Add grocery list';

export const COLUMNS: ColumnType[] = [
    {id: "NOT COOKED YET", title: "Not Cooked Yet"},
    {id: "READY TO BE COOKED", title: "Ready To Be Cooked"},
    {id: "REVIEW", title: "Review"}
];

//Grocery list
export const GROCERY_LIST_DIALOG_TITLE = 'Grocery list';
export const GROCERY_LIST_INPUT_PLACEHOLDER = 'add your first product here';
export const GROCERY_LIST_ADD_ITEM_BTN = '+ Add item';
export const GROCERY_LIST_CANCEL_BTN = 'Cancel';
export const GROCERY_LIST_SAVE_BTN = 'Save';

//Recipe List Page
export const LINK_TO_RECIPES = 'My recipe book';
export const NO_RECIPES_RESULT = 'No recipes found.';
export const RECIPES_LOADING_DIV = 'Loading recipes…';
export const LOADING_ERROR = 'Error: ';
export const UNKNOWN_ERROR = 'Unknown error';
export const FILTERS_INIT_STATE: FilterType = {
    cuisine: 'all',
    mealType: 'all',
    difficulty: 'all',
};
