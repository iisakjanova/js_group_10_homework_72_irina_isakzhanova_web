import axiosApi from "../../axiosApi";

export const ADD_DISH_REQUEST = 'ADD_DISH_REQUEST';
export const ADD_DISH_SUCCESS = 'ADD_DISH_SUCCESS';
export const ADD_DISH_FAILURE = 'ADD_DISH_FAILURE';

export const GET_DISHES_REQUEST = 'GET_DISHES_REQUEST';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_FAILURE = 'GET_DISHES_FAILURE';

export const addDishRequest = () => ({type: ADD_DISH_REQUEST});
export const addDishSuccess = () => ({type: ADD_DISH_SUCCESS});
export const addDishFailure = error => ({type: ADD_DISH_FAILURE, payload: error});

export const getDishesRequest = () => ({type: GET_DISHES_REQUEST});
export const getDishesSuccess = dishes => ({type: GET_DISHES_SUCCESS, payload: dishes});
export const getDishesFailure = error => ({type: GET_DISHES_FAILURE, payload: error});


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

export const getDishes = () => {
    return async dispatch => {
        try {
            dispatch(getDishesRequest());
            const response = await axiosApi.get('/dishes.json');
            dispatch(getDishesSuccess(response.data));
        } catch (error) {
            dispatch(getDishesFailure(error));
        }
    };
};
