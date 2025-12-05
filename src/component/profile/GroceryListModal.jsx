import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, IconButton} from "@mui/material";
import {forwardRef, useState} from "react";
import {useSessionStorage} from "../../hook/useSessionStorage.js";
import CloseIcon from '@mui/icons-material/Close';

function GroceryListModal({isOpen, onClose, recipe}) {
    const [storedRecipes, setStoredRecipes] = useSessionStorage("favorites", []);
    const [products, setProducts] = useState([
        {id: generateUniqueId(), name: ''}
    ]);

    const handleAddToGroceryList = () => {
        const validProducts = products.filter(product => product.name.trim() !== '');
        const newProduct = {id: generateUniqueId(), name: ''};
        setProducts([...validProducts, newProduct]);
    };

    const handleProductChange = (id, newName) => {
        setProducts(prevState =>
            prevState.map(product =>
                product.id === id ? {...product, name: newName} : product));
    }

    const handleSave = () => {
        const validProducts = products.filter(product => product.name.trim() !== '');
        if (validProducts.length === 0) return;

        saveRecipeProducts(recipe.id, validProducts);
        onClose();
    }

    function saveRecipeProducts(recipeId, products) {
        setStoredRecipes(currentRecipes => currentRecipes.map(r => (
            r.id === recipeId
                ? {...r, products}
                : r
        )));
    }

    return (
        <Dialog
            className="grocery-list-dialog"
            open={isOpen}
            onClose={onClose}
            slots={{
                transition: Transition,
            }}
            maxWidth="sm"
            fullWidth
            disableRestoreFocus>

            <IconButton
                className="close-button"
                onClick={onClose}>
                <CloseIcon />
            </IconButton>

            <DialogTitle>Grocery list</DialogTitle>

            <DialogContent>
                <h3 className="recipe-title">{recipe?.name}</h3>

                <div className="products-list">
                    {products.map(({id, name}) => (
                        <div key={id} className="product-item">
                            <TextField
                                fullWidth
                                placeholder="add your first product here"
                                value={name}
                                onChange={(e) => handleProductChange(id, e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="add-button"
                    onClick={handleAddToGroceryList}>
                    + Add item
                </button>
            </DialogContent>

            <DialogActions className="dialog-actions">
                <Button onClick={onClose} variant="outlined">
                    Cancel
                </Button>
                <Button onClick={handleSave} variant="contained">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props}/>;
});

const generateUniqueId = () => crypto.randomUUID();

export default GroceryListModal