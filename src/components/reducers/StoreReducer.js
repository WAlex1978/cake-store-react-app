import initState from './initState';

const StoreReducer = (state = initState, action) => {
    switch(action.type) {

        // Action called when adding item to cart
        case 'ADD_TO_CART':

            // Update total price
            state.total+=action.item.price*action.quantity;

            // Check if item exists in cart
            let item = state.cart.find(item => action.item.id === item.id);

            // If item does not exist in cart, add item to cart
            if (!item) {
                action.item.quantity=parseInt(action.quantity);
                return {
                    ...state,
                    cart: [...state.cart, action.item],
                }
            }

            // If item exists in cart, update quantity of existing item
            item.quantity=parseInt(item.quantity) + parseInt(action.quantity);
            return state

        // Action called when removing item from cart
        case 'REMOVE_FROM_CART':

            // Update total price
            state.total-=action.item.price*action.item.quantity;

            // Remove item from cart
            item = state.cart.filter(item => action.item.id !== item.id);

            return {
                ...state,
                cart: item,
            }

        default:
            return state;
      }
}

export default StoreReducer;