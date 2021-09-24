import axiosApi from "../../axiosApi";

export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILURE = 'GET_ORDERS_FAILURE';

export const getOrdersRequest = () => ({type: GET_ORDERS_REQUEST});
export const getOrdersSuccess = dishes => ({type: GET_ORDERS_SUCCESS, payload: dishes});
export const getOrdersFailure = error => ({type: GET_ORDERS_FAILURE, payload: error});

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
