export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_GAME_SERIES_SUCCESS = 'FETCH_GAME_SERIES_SUCCESS';
export const FETCH_SINGLE_PRODUCT_SUCCESS = 'FETCH_SINGLE_PRODUCT_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';


function fetchProductsPending() {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

function fetchProductsSuccess(products) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

function fetchSingleProductSuccess(products) {
    return {
        type: FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: products
    }
}

function fetchGameSeriesSuccess(products) {
    return {
        type: FETCH_GAME_SERIES_SUCCESS,
        payload: products
    }
}

function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error
    }
}

export const fetchProducts = (url) => {
    return (dispatch) => {
        dispatch(fetchProductsPending());
        fetch('https://www.amiiboapi.com/api/amiibo/?type=figure')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchProductsSuccess(res.amiibo));
            })
            .catch(error => {
                dispatch(fetchProductsError(error.message));
            })
    }
}


export const fetchSingleProduct = (url) => {
    return (dispatch) => {
        dispatch(fetchProductsPending());
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchSingleProductSuccess(res.amiibo));
            })
            .catch(error => {
                dispatch(fetchProductsError(error.message));
            })
    }
}

export const fetchGameSeries = (url) => {
    return (dispatch) => {
        dispatch(fetchProductsPending());
        fetch(url)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchGameSeriesSuccess(res.amiibo));
            })
            .catch(error => {
                dispatch(fetchProductsError(error.message));
            })
    }
}