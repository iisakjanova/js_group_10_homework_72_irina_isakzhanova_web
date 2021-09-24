import {
    GET_ORDERS_FAILURE,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS
} from "../actions/ordersActions";

const initialState = {
    orders: '',
    loading: false,
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST:
            return {...state, loading: true};
        case GET_ORDERS_SUCCESS:
            return {...state, loading: false, orders: action.payload};
        case GET_ORDERS_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default ordersReducer;