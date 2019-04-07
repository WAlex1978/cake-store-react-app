// Add selected item to cart
// Provides selected item and quantity of item as parameters
export const addToCart = (item, quantity) => {
    return {
        type: 'ADD_TO_CART',
        item,
        quantity,
    }
}

// Remove selected item from cart
// Provides selected item as parameters
export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        item
    }
}