import {Types} from "../../actions/Types";

const INITIAL_STATE = {
    collections: null
};

const shopReducer = (state=INITIAL_STATE, action) => {

    switch (action.type) {
        case Types.UPDATED_SHOP_DATA:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state
    }
};

export default shopReducer