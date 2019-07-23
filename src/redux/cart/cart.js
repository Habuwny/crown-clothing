import {Types} from "../../actions/Types";
import addToCart from './cartUtils'
import {removeItemFromCart} from './cartUtils'

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
        case Types.REMOVE_ITEEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(item =>{
                    return item.id !== action.payload.id
                })
            };
        case Types.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)

            }
        default:
            return state;

    }
};

export default toggleHideReducer;