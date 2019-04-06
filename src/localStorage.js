export const loadState = () => {
    try {
        const state = localStorage.getItem('cart');
        if (state === null) {
            return undefined;
        }

        return JSON.parse(state);
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