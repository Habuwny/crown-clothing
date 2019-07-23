import {Types} from "../../actions/Types";

const STATE_INITIAL = {
    hidden: true
};

const toggleHideReducer = (state = STATE_INITIAL, action) => {
    switch (action.type) {
        case Types.TOGGLE_CART_HIDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;

    }
};

export default toggleHideReducer;