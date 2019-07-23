import {combineReducers} from "redux";

import userReducer from './user/user'
import toggleHideReducer from './cart/cart'



export default combineReducers({
    user: userReducer,
    cart: toggleHideReducer
})