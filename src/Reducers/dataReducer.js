import {FETCH_PRODUCTS_PENDING,FETCH_GAME_SERIES_SUCCESS,FETCH_SINGLE_PRODUCT_SUCCESS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR} from '../Actions/dataAction';

const initialState = {
    pending: false,
    products: [],
    error: null,
    singleProduct:[],
    gameSeriesFigures:[],
}

function dataReducer(state = initialState, action) {
    let tempProducts=[];
    let gameSeries=[
        'Super Mario',
        'The Legend of Zelda',
        'Animal Crossing',
        'Star Fox',
        'Metroid',
        'Splatoon',
        'Pokemon',
        'Kirby',
        'Fire Emblem',
        'Monster Hunter'
    ]
    switch(action.type) {
        case FETCH_PRODUCTS_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            for(let i=0; i<action.payload.length; i++){
                if(gameSeries.includes(action.payload[i].gameSeries)){
                    tempProducts.push(action.payload[i])
                }
            }
            return {
                ...state,
                pending: false,
                products: tempProducts,
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
        case FETCH_GAME_SERIES_SUCCESS:
            return {
                ...state,
                pending: false,
                gameSeriesFigures: [...action.payload]
            }
        default: 
            return state;
    }
}

export default dataReducer;