import {createStore, applyMiddleware} from "redux";
import {persistStore} from "redux-persist";
import logger from 'redux-logger'


import Reducers from './root'

const middlewares = [logger];

export const store = createStore(Reducers, applyMiddleware(...middlewares));
export const persistor = persistStore(store);



