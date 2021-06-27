import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import itemReducer from './itemReducer';
import dataReducer from './dataReducer';

const rootReducer= combineReducers({
    cartReducer,
    itemReducer,
    dataReducer
})

export default rootReducer;