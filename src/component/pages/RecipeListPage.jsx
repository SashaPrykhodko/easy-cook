import {useEffect, useMemo, useState} from 'react'
import {useRecipes} from '../../hook/useRecipes.ts'
import {Link} from "react-router-dom";

import RecipeFilterBar from '../recipes/RecipeFilterBar.jsx'
import RecipeGrid from '../recipes/RecipeGrid.jsx';

import './index.css';
import {
    FILTERS_INIT_STATE,
    LINK_TO_RECIPES,
    LOADING_ERROR,
    NO_RECIPES_RESULT,
    RECIPES_LOADING_DIV,
    UNKNOWN_ERROR
} from "../../constants.ts";


function RecipeListPage() {
    const {recipes, isLoading, isError, error} = useRecipes();
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(FILTERS_INIT_STATE);
    const [addRecipe, setAddRecipe] = useState(false);

    useEffect(() => {
        if (isError) {
            console.error('Error loading recipes:', error)
        }
    }, [isError, error]);

    const filteredRecipes = useMemo(() =>
            filterRecipes(recipes, search, filter),
        [search, recipes, filter]
    );

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const handleAddRecipe = () => {
        setAddRecipe(!addRecipe);
    }

    if (isLoading) return <div>{RECIPES_LOADING_DIV}</div>;
    if (isError) return <div>{LOADING_ERROR}{error?.message ?? UNKNOWN_ERROR}</div>;

    return (
        <div className="recipe-list-page">
            <RecipeFilterBar search={search}
                             onSearchChange={handleSearchChange}
                             filter={filter}
                             onFilterChange={handleFilterChange}
                             onAddRecipe={handleAddRecipe}/>

            <Link to="/profile">{LINK_TO_RECIPES}</Link>

            {filteredRecipes.length === 0 ? (
                <div>{NO_RECIPES_RESULT}</div>
            ) : (
                <RecipeGrid recipes={filteredRecipes}/>
            )}
        </div>
    );
}

function filterRecipes(recipes, searchTerm, filter) {
    const searchCriteria = searchTerm.trim().toLowerCase();
    if (!searchCriteria && (filter.cuisine === 'all' && filter.mealType === 'all' && filter.difficulty === 'all'))
        return recipes;


    if (searchCriteria) {
        recipes = textFilter(recipes, searchCriteria);
    }

    const filterConfigs = [
        {field: 'cuisine', recipeField: 'cuisine', value: filter.cuisine, isArray: false},
        {field: 'mealType', recipeField: 'mealType', value: filter.mealType, isArray: true},
        {field: 'difficulty', recipeField: 'difficulty', value: filter.difficulty, isArray: false},
    ];
    if (filter.cuisine !== 'all' || filter.mealType !== 'all' || filter.difficulty !== 'all') {
        recipes = selectFilter(recipes, filterConfigs);
    }

    return recipes;
}

function textFilter(recipes, searchCriteria) {
    return recipes.filter(recipe => {
        const title = (recipe.name).toLowerCase();
        return title.includes(searchCriteria);
    });
}

function selectFilter(recipes, filterConfig) {
    return recipes.filter(recipe => {
        return filterConfig.every(config => {
            const {recipeField, value, isArray} = config;

            if (value === 'all') return true;

            const recipeValue = recipe[recipeField];
            const normalizedValue = value.toLowerCase();

            if (isArray && Array.isArray(recipeValue)) {
                return recipeValue.some(v => v.toLowerCase() === normalizedValue);
            }

            return (recipeValue || '').toLowerCase() === normalizedValue;
        })
    })
}

export default RecipeListPage