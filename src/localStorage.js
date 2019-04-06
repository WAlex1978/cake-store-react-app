import { initState } from './components/reducers/StoreReducer';

export const loadState = () => {
    try {
        const cart = localStorage.getItem('cart');
        if (cart === null) {
            return undefined;
        }

        return ({
            cake: initState.cake,
            cupcake: initState.cupcake,
            cart: JSON.parse(cart.cart),
            total: JSON.parse(cart.total),
        });
    }
    catch (err) {
        return undefined;
    }
}

export const saveState = (cart) => {
    try {
        const state = JSON.stringify(cart);
        localStorage.setItem('cart', state);
    }
    catch (err) {
        console.log(err);
    }
}