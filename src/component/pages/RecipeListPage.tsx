import {useEffect, useMemo, useState} from 'react'
import {useRecipes} from '../../hook/useRecipes.ts'
import {Link} from "react-router-dom";

import RecipeFilterBar from '../recipes/RecipeFilterBar.tsx'
import RecipeGrid from '../recipes/RecipeGrid.tsx';

import './index.css';
import {
    FILTERS_INIT_STATE,
    LINK_TO_RECIPES,
    LOADING_ERROR,
    NO_RECIPES_RESULT,
    RECIPES_LOADING_DIV,
    UNKNOWN_ERROR
} from "../../constants.ts";
import type {FilterType, Recipe} from "../../types/recipe.ts";
import * as React from "react";

type FilterConfig = {
    field: string,
    recipeField: string,
    value: string,
    isArray: boolean
};

function RecipeListPage() {
    const {recipes, isLoading, isError, error} = useRecipes();
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(FILTERS_INIT_STATE);

    useEffect(() => {
        if (isError) {
            console.error('Error loading recipes:', error)
        }
    }, [isError, error]);

    const filteredRecipes: Recipe[] = useMemo(() =>
            filterRecipes(recipes, search, filter),
        [search, recipes, filter]
    );

    const handleSearchChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleFilterChange = (newFilter: FilterType) => {
        setFilter(newFilter);
    };

    if (isLoading) return <div>{RECIPES_LOADING_DIV}</div>;
    if (isError) return <div>{LOADING_ERROR}{error?.message ?? UNKNOWN_ERROR}</div>;

    return (
        <div className="recipe-list-page">
            <RecipeFilterBar search={search}
                             onSearchChange={handleSearchChange}
                             filter={filter}
                             onFilterChange={handleFilterChange}/>

            <Link to="/profile">{LINK_TO_RECIPES}</Link>

            {filteredRecipes.length === 0 ? (
                <div>{NO_RECIPES_RESULT}</div>
            ) : (
                <RecipeGrid recipes={filteredRecipes}/>
            )}
        </div>
    );
}

function filterRecipes(recipes: Recipe[], searchTerm: string, filter: FilterType) {
    const searchCriteria = searchTerm.trim().toLowerCase();
    if (!searchCriteria && (filter.cuisine === 'all' && filter.mealType === 'all' && filter.difficulty === 'all'))
        return recipes;


    if (searchCriteria) {
        recipes = textFilter(recipes, searchCriteria);
    }

    const filterConfigs: FilterConfig[] = [
        {field: 'cuisine', recipeField: 'cuisine', value: filter.cuisine, isArray: false},
        {field: 'mealType', recipeField: 'mealType', value: filter.mealType, isArray: true},
        {field: 'difficulty', recipeField: 'difficulty', value: filter.difficulty, isArray: false},
    ];
    if (filter.cuisine !== 'all' || filter.mealType !== 'all' || filter.difficulty !== 'all') {
        recipes = selectFilter(recipes, filterConfigs);
    }

    return recipes;
}

function textFilter(recipes: Recipe[], searchCriteria: string): Recipe[] {
    return recipes.filter(recipe => {
        const title = (recipe.name).toLowerCase();
        return title.includes(searchCriteria);
    });
}

function selectFilter(recipes: Recipe[], filterConfig: FilterConfig[]): Recipe[] {
    return recipes.filter(recipe => {
        return filterConfig.every((config: FilterConfig) => {
            const {recipeField, value, isArray} = config;

            if (value === 'all') return true;

            const recipeValue = recipe[recipeField];
            const normalizedValue = value.toLowerCase();

            if (isArray && Array.isArray(recipeValue)) {
                return recipeValue.some(v => v.toLowerCase() === normalizedValue);
            }

            return String(recipeValue || '').toLowerCase() === normalizedValue;
        })
    })
}

export default RecipeListPage