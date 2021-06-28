import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import dataReducer from './dataReducer';

const rootReducer= combineReducers({
    cartReducer,
    dataReducer
})

export default rootReducer;