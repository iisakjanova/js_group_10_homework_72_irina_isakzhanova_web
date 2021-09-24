import axiosApi from "../../axiosApi";

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

export const REMOVE_ORDER_REQUEST = 'REMOVE_ORDER_REQUEST';
export const REMOVE_ORDER_SUCCESS = 'REMOVE_ORDER_SUCCESS';
export const REMOVE_ORDER_FAILURE = 'REMOVE_ORDER_FAILURE';

export const getOrdersRequest = () => ({type: GET_ORDERS_REQUEST});
export const getOrdersSuccess = dishes => ({type: GET_ORDERS_SUCCESS, payload: dishes});
export const getOrdersFailure = error => ({type: GET_ORDERS_FAILURE, payload: error});

export const removeOrderRequest = () => ({type: REMOVE_ORDER_REQUEST});
export const removeOrderSuccess = () => ({type: REMOVE_ORDER_SUCCESS});
export const removeOrderFailure = error => ({type: REMOVE_ORDER_FAILURE, payload: error});

export const getOrders = () => {
    return async dispatch => {
        try {
            dispatch(getOrdersRequest());
            const response = await axiosApi.get('/orders.json');
            dispatch(getOrdersSuccess(response.data));
        } catch (error) {
            dispatch(getOrdersFailure(error));
        }
    };
};
export const removeOrder = id => {
    return async dispatch => {
        try {
            dispatch(removeOrderRequest());
            await axiosApi.delete(`/orders/${id}.json`);
            dispatch(removeOrderSuccess());
        } catch (error) {
            dispatch(removeOrderFailure(error));
        }
    };
};

