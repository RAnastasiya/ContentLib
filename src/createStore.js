import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import {getRootReducer} from './services';
import { createLogger } from 'redux-logger'


const store = createStore(getRootReducer(), compose(applyMiddleware(thunk, createLogger())));


export default store;