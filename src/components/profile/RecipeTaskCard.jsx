import {useDraggable} from "@dnd-kit/core";
import {CSS} from "@dnd-kit/utilities";
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./index.css";
import {IMAGE_PLACEHOLDER} from "../../constants.js";
import {useState} from "react";
import GroceryListModal from "./GroceryListModal.jsx";

function RecipeTaskCard({recipe, onRecipesChange}) {
    const {attributes, listeners, setNodeRef, transform, transition}
        = useDraggable({id: recipe.id});

    const [anchorEl, setAnchorEl] = useState(null);
    const [isGroceryModalOpen, setIsGroceryModalOpen] = useState(false);
    const open = Boolean(anchorEl);

    const title = recipe.name || 'Untitled';
    const image = recipe.image || IMAGE_PLACEHOLDER;
    const style = {
        transition, transform: CSS.Translate.toString(transform),
    };

    const handleActionClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleGroceryListOpen = () => {
        setAnchorEl(null);
        setIsGroceryModalOpen(true);
    }

    const handleGroceryModalClose = () => {
        setIsGroceryModalOpen(false);
    }

    return (
        <>
            <div
                className="recipe-task"
                ref={setNodeRef}
                {...listeners}
                {...attributes}
                style={style}
            >
                <div className="recipe-card">
                    <CardHeader
                        action={<>
                            <IconButton
                                aria-label="settings"
                                onClick={handleActionClick}
                                onPointerDown={(e) => e.stopPropagation()}
                            >
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                onPointerDown={(e) => e.stopPropagation()}
                            >
                                <MenuItem onClick={handleGroceryListOpen}>Add grocery list</MenuItem>
                                <MenuItem onClick={handleGroceryListOpen}>Add comment</MenuItem>
                            </Menu>
                        </>}
                        title={title}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={image}
                    />
                </div>
            </div>
            <GroceryListModal
                isOpen={isGroceryModalOpen}
                onClose={handleGroceryModalClose}
                recipe={recipe}
                onSave={onRecipesChange}/>
        </>);
}

export default RecipeTaskCard