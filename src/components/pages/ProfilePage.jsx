import { useState } from "react";
import RecipeBoard from "../profile/RecipeBoard";

function ProfilePage() {
  const NOT_COOKED_STATUS = 'NOT COOKED YET';

  const [myRecipes, setMyRecipes] = useState(() => {
    return JSON.parse(sessionStorage.getItem('favorites')) || [];
  });

  const notCooked = myRecipes.filter(recipe => {
    recipe.status === NOT_COOKED_STATUS
  });

  return (
    <div>
      <div>This is profile page</div>
      <h2>Not cooked ({notCooked.length})</h2>
      <ul>
        {notCooked.map(recipe => (
          <li key={recipe.id}> {recipe.name}</li>
        ))}
      </ul>
      <RecipeBoard />
    </div>
  );
}

export default ProfilePage