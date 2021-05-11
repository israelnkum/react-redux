import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const initialState = {};

const middleware = [thunk]

const Store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

window.store = Store

export default Store;
