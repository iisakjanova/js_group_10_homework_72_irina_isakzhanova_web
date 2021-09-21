import axiosApi from "../../axiosApi";

export const ADD_DISH_REQUEST = 'ADD_DISH_REQUEST';
export const ADD_DISH_SUCCESS = 'ADD_DISH_SUCCESS';
export const ADD_DISH_FAILURE = 'ADD_DISH_FAILURE';

export const addDishRequest = () => ({type: ADD_DISH_REQUEST});
export const addDishSuccess = () => ({type: ADD_DISH_SUCCESS});
export const addDishFailure = error => ({type: ADD_DISH_FAILURE, payload: error});

export const addDish = (dishData) => {
    return async dispatch => {
        try {
            dispatch(addDishRequest());
            await axiosApi.post('/dishes.json', dishData);
            dispatch(addDishSuccess());
        } catch (error) {
            dispatch(addDishFailure(error));
        }
    };
};