import CartContext from "./cart-contex";
import { useContext } from 'react';
import { useReducer } from "react";

const defaultState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === "ADD"){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultState;
}

const CartProvider = (props) => {
    const cartCtx = useContext(CartContext)
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);

    const addItemToCartHandler = item => {
        dispatchCart({type:'ADD', item: item})
    };

    const removeItemFromCartHandler = id => {
        dispatchCart({type: 'REMOVE', id: id})
    };
    
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;