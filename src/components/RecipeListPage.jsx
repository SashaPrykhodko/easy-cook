import { useEffect, useMemo, useState } from 'react'
import { useRecipes } from '../hooks/useRecipes.js'
import { Link } from "react-router-dom";

import RecipeFilterBar from './RecipeFilterBar.jsx'
import RecipeGrid from './RecipeGrid.jsx';
import RecipeForm from './RecipeForm.jsx';

import '../RecipeListPage.css';


function RecipeListPage() {
  const { data, isLoading, isError, error } = useRecipes();

  useEffect(() => {
    if (data) {
      console.log('Recipes loaded: ', data);
    }
  }, [data]);

  useEffect(() => {
    if (isError) {
      console.error('Error loading recipes:', error)
    }
  }, [isError, error]);

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    cuisine: 'all',
    mealType: 'all',
    difficulty: 'all',
  });
  const [addRecipe, setAddRecipe] = useState(false);

  const recipes = data?.recipes ?? data ?? [];

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleAddRecipe = (e) => {
    setAddRecipe(!addRecipe);
  }

  const filteredRecipes = useMemo(() =>
    filterRecipes(recipes, search, filter),
    [search, recipes, filter]
  );

  if (isLoading) return <div>Loading recipes…</div>;
  if (isError) return <div>Error: {error?.message ?? 'Unknown error'}</div>;

  return (
    <div className="recipe-list-page">
      <RecipeFilterBar search={search}
        onSearchChange={handleSearchChange}
        filter={filter}
        onFilterChange={handleFilterChange}
        onAddRecipe={handleAddRecipe} />

      <Link to="/profile">My recipe book</Link>

      {filteredRecipes.length === 0 ? (
        <div>No recipes found.</div>
      ) : (
        <RecipeGrid recipes={filteredRecipes} />
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

  if (filter.cuisine !== 'all' || filter.mealType !== 'all' || filter.difficulty !== 'all') {
    const filterConfigs = [
      { field: 'cuisine', recipeField: 'cuisine', value: filter.cuisine, isArray: false },
      { field: 'mealType', recipeField: 'mealType', value: filter.mealType, isArray: true },
      { field: 'difficulty', recipeField: 'difficulty', value: filter.difficulty, isArray: false },
    ];
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
      const { field, recipeField, value, isArray } = config;

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