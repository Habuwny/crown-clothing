import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user'
import toggleHideReducer from './cart/cart'
import directoryReducer from './directory/directory'
import shopReducer from './shop/shop'



const persistConfig = {
    key:'root',
    storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: toggleHideReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer)