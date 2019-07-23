import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'

import Reducers from './root'

const middlewares = [logger];

const store = createStore(Reducers, applyMiddleware(...middlewares));


export default store;
