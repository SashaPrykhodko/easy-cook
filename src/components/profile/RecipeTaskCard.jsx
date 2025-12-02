import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./index.css";
import {IMAGE_PLACEHOLDER} from "../../constants.js";

function RecipeTaskCard({recipe}) {
    const {attributes, listeners, setNodeRef, transform, transition} =
        useDraggable({id: recipe.id});

    const title = recipe.name || 'Untitled';
    const image = recipe.image || IMAGE_PLACEHOLDER;
    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
    };

    const handleActionClick = () => {
        console.log('Settings clicked');
    };

    return (
        <div
            className="recipe-task"
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            style={style}
        >
            <CardHeader
                action={
                    <IconButton
                        aria-label="settings"
                        onClick={handleActionClick}
                        onPointerDown={(e) => e.stopPropagation()}
                    >
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={title}
            />
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
        </div>
    )
}

export default RecipeTaskCard