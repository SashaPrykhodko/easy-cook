import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide} from "@mui/material";
import {forwardRef, useState} from "react";

function GroceryListModal({isOpen, onClose, recipe, storedRecipes, setStoredRecipes}) {
    const [products, setProducts] = useState([
        {id: generateUniqueId(), name: ''}
    ]);

    const handleAddToGroceryList = () => {
        // console.log('products', products);
        const validProducts = products.filter(product => product.name.trim() !== '');
        // console.log('valid products', validProducts);
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
        // onSave?.();
        onClose();
    }

    function saveRecipeProducts(recipeId, products) {
        const updatedRecipes = storedRecipes.map(recipe =>
            recipe.id === recipeId
                ? { ...recipe, products }
                : recipe
        );
        setStoredRecipes(updatedRecipes);
    }

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            slots={{
                transition: Transition,
            }}
            disableRestoreFocus>
            <DialogTitle>Add products</DialogTitle>
            <DialogContent>
                {products.map(({id, name}) => (
                    <div key={id}>
                        {/*<input type="checkbox" checked={checked}/>*/}
                        <input type="text" placeholder="Product name"
                               value={name}
                               onChange={(e) => handleProductChange(id, e.target.value)}/>
                    </div>
                ))}

            </DialogContent>
            <DialogActions>
                <Button onClick={handleAddToGroceryList}>Add to grocery list</Button>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit" form="subscription-form" onClick={handleSave}>
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