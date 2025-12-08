import {useState} from "react";
import AddRecipeModal from "./form/AddRecipeModal.jsx";
import "./index.css";
import {CUISINE_OPTIONS, DIFFICULTY_OPTIONS, MEAL_TYPE_OPTIONS, SEARCH_RECIPES_PLACEHOLDER} from "../../constants.ts";

function RecipeFilterBar({search, onSearchChange, filter, onFilterChange}) {
    const [isAddRecipe, setIsAddRecipe] = useState(false);

    const handleSelectChange = (e) => {
        const {name, value} = e.target;
        onFilterChange({
            ...filter,
            [name]: value,
        });
    }

    const handleOpenAddNewRecipe = () => {
        setIsAddRecipe(true);
    }

    const handleCloseAddNewRecipe = () => {
        setIsAddRecipe(false);
    }

    return (
        <>
            <div className="recipe-filter-bar">
                <input value={search}
                       onChange={onSearchChange}
                       type="text"
                       placeholder={SEARCH_RECIPES_PLACEHOLDER}/>

                <label htmlFor="cuisine">Cuisine:</label>
                <select id="cuisine" name="cuisine" value={filter.cuisine} onChange={handleSelectChange}>
                    {CUISINE_OPTIONS.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>

                <label htmlFor="mealType">Meal Type:</label>
                <select id="mealType" name="mealType" value={filter.mealType} onChange={handleSelectChange}>
                    {MEAL_TYPE_OPTIONS.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </select>

                <label htmlFor="difficulty">Difficulty:</label>
                <select id="difficulty" name="difficulty" value={filter.difficulty} onChange={handleSelectChange}>
                    {DIFFICULTY_OPTIONS.map(({value, label}) => (
                        <option key={value} value={value}>{label}</option>
                        ))}
                </select>

                <button onClick={handleOpenAddNewRecipe}>Add new recipe</button>
                <AddRecipeModal
                    isOpen={isAddRecipe}
                    onClose={handleCloseAddNewRecipe}
                    onSubmit={handleCloseAddNewRecipe}/>
            </div>
        </>);
}

export default RecipeFilterBar