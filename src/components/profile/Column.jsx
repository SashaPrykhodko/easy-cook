import {useDroppable} from "@dnd-kit/core";
import Grid from '@mui/material/Grid';

import "./index.css";
import RecipeTaskCard from "./RecipeTaskCard";

function Column({column, recipes}) {
    const {setNodeRef} = useDroppable({id: column.id});
    return (
        <div className="column">
            <h2 className="h2"> {column.title} </h2>
            <div ref={setNodeRef} className="column-content">
                <Grid container spacing={2}>
                    {recipes.map((recipe) => (
                        <Grid key={recipe.id}>
                            <RecipeTaskCard recipe={recipe}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}

export default Column
