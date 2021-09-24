import {
    GET_ORDERS_FAILURE,
    GET_ORDERS_REQUEST,
    GET_ORDERS_SUCCESS,
    REMOVE_ORDER_FAILURE, REMOVE_ORDER_FROM_STATE,
    REMOVE_ORDER_REQUEST,
    REMOVE_ORDER_SUCCESS
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
        case REMOVE_ORDER_FROM_STATE:
            const {[action.payload]: _, ...restOrders} = state.orders;

            return {
                ...state,
                orders: restOrders,
            };
        case REMOVE_ORDER_REQUEST:
            return {...state, loading: true};
        case REMOVE_ORDER_SUCCESS:
            return {...state, loading: false};
        case REMOVE_ORDER_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default ordersReducer;