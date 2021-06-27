import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers/rootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const Store = createStore(
    rootReducer,
    applyMiddleware(thunk,logger),
)

console.log(Store.getState());
export default Store;
