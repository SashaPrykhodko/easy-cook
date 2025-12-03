function RecipeFilterBar({ search, onSearchChange, filter, onFilterChange, onAddRecipe }) {
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filter,
      [name]: value,
    });
  }
  const handleAddNewRecipe = () => {
    console.log('Add recipe clicked');
    onAddRecipe();
  }

  return (
    <div className="recipe-filter-bar">
      <input value={search}
        onChange={onSearchChange}
        type="text"
        placeholder="Search recipes..." />

      <label htmlFor="cuisine">Cuisine:</label>
      <select id="cuisine" name="cuisine" value={filter.cuisine} onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="chinese">Chinese</option>
      </select>

      <label htmlFor="mealType">Meal Type:</label>
      <select id="mealType" name="mealType" value={filter.mealType} onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>

      <label htmlFor="difficulty">Difficulty:</label>
      <select id="difficulty" name="difficulty" value={filter.difficulty} onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <button onClick={handleAddNewRecipe}>Add new recipe</button>
    </div>
  );
}

export default RecipeFilterBar