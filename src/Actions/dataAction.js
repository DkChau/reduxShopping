export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
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

function fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error
    }
}

export const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsPending());
        fetch('https://www.amiiboapi.com/api/amiibo')
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                console.log(res);
                dispatch(fetchProductsSuccess(res.amiibo));
            })
            .catch(error => {
                dispatch(fetchProductsError(error.message));
            })
    }
}