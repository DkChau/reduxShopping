import {FETCH_PRODUCTS_PENDING,FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../Actions/dataAction';

const initialState = {
    pending: false,
    products: [],
    error: null,
    singleProduct:[],
}

function dataReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                pending: false,
                products: [...action.payload]
        }
        case FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                pending: false,
                singleProduct: action.payload
             }
        case FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default: 
            return state;
    }
}

export default dataReducer;