export const addToCart = (item, quantity) => {
    return {
        type: 'ADD_TO_CART',
        item,
        quantity,
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        item
    }
}