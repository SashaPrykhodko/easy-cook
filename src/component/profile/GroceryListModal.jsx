import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, IconButton} from "@mui/material";
import {forwardRef, useState} from "react";
import {useSessionStorage} from "../../hook/useSessionStorage.ts";
import CloseIcon from '@mui/icons-material/Close';
import {
    GROCERY_LIST_ADD_ITEM_BTN,
    GROCERY_LIST_CANCEL_BTN, GROCERY_LIST_DIALOG_TITLE, GROCERY_LIST_INPUT_PLACEHOLDER,
    GROCERY_LIST_SAVE_BTN,
    SESSION_STORE_FAVORITES
} from "../../constants.ts";

function GroceryListModal({isOpen, onClose, recipe}) {
    const [storedRecipes, setStoredRecipes] = useSessionStorage(SESSION_STORE_FAVORITES, []);
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

            <DialogTitle>{GROCERY_LIST_DIALOG_TITLE}</DialogTitle>

            <DialogContent>
                <h3 className="recipe-title">{recipe?.name}</h3>

                <div className="products-list">
                    {products.map(({id, name}) => (
                        <div key={id} className="product-item">
                            <TextField
                                fullWidth
                                placeholder={GROCERY_LIST_INPUT_PLACEHOLDER}
                                value={name}
                                onChange={(e) => handleProductChange(id, e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <button
                    className="add-button"
                    onClick={handleAddToGroceryList}>
                    {GROCERY_LIST_ADD_ITEM_BTN}
                </button>
            </DialogContent>

            <DialogActions className="dialog-actions">
                <Button onClick={onClose} variant="outlined">
                    {GROCERY_LIST_CANCEL_BTN}
                </Button>
                <Button onClick={handleSave} variant="contained">
                    {GROCERY_LIST_SAVE_BTN}
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