import {Types} from "../../actions/Types";
import addToCart from './cartUtils'

const STATE_INITIAL = {
    hidden: true,
    cartItems: []
};

const toggleHideReducer = (state = STATE_INITIAL, action) => {
    switch (action.type) {
        case Types.TOGGLE_CART_HIDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case Types.ADD_ITEM:
            return {
                ...state,
                cartItems: addToCart(state.cartItems, action.payload)
            };
        default:
            return state;

    }
};

export default toggleHideReducer;