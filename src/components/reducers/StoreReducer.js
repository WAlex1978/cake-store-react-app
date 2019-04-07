import initState from './initState';

const StoreReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            state.total+=action.item.price*action.quantity;
            let item = state.cart.find(item => action.item.id === item.id);
            if (!item) {
                action.item.quantity=parseInt(action.quantity);
                return {
                    ...state,
                    cart: [...state.cart, action.item],
                }
            }

            item.quantity=parseInt(item.quantity) + parseInt(action.quantity);
            return state

        case 'REMOVE_FROM_CART':
            state.total-=action.item.price*action.item.quantity;
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