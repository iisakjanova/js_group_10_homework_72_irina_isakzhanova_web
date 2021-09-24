import axiosApi from "../../axiosApi";

export const ADD_DISH_REQUEST = 'ADD_DISH_REQUEST';
export const ADD_DISH_SUCCESS = 'ADD_DISH_SUCCESS';
export const ADD_DISH_FAILURE = 'ADD_DISH_FAILURE';

export const EDIT_DISH_REQUEST = 'EDIT_DISH_REQUEST';
export const EDIT_DISH_SUCCESS = 'EDIT_DISH_SUCCESS';
export const EDIT_DISH_FAILURE = 'EDIT_DISH_FAILURE';

export const REMOVE_DISH_FROM_STATE = 'REMOVE_DISH_FROM_STATE';
export const REMOVE_DISH_REQUEST = 'REMOVE_DISH_REQUEST';
export const REMOVE_DISH_SUCCESS = 'REMOVE_DISH_SUCCESS';
export const REMOVE_DISH_FAILURE = 'REMOVE_DISH_FAILURE';

export const GET_DISHES_REQUEST = 'GET_DISHES_REQUEST';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_FAILURE = 'GET_DISHES_FAILURE';

export const GET_DISH_BY_ID_REQUEST = 'GET_DISH_BY_ID_REQUEST';
export const GET_DISH_BY_ID_SUCCESS = 'GET_DISH_BY_ID_SUCCESS';
export const GET_DISH_BY_ID_FAILURE = 'GET_DISH_BY_ID_FAILURE';

export const addDishRequest = () => ({type: ADD_DISH_REQUEST});
export const addDishSuccess = () => ({type: ADD_DISH_SUCCESS});
export const addDishFailure = error => ({type: ADD_DISH_FAILURE, payload: error});

export const editDishRequest = () => ({type: EDIT_DISH_REQUEST});
export const editDishSuccess = () => ({type: EDIT_DISH_SUCCESS});
export const editDishFailure = error => ({type: EDIT_DISH_FAILURE, payload: error});

export const removeDishFromState = id => ({type: REMOVE_DISH_FROM_STATE, payload: id});
export const removeDishRequest = () => ({type: REMOVE_DISH_REQUEST});
export const removeDishSuccess = () => ({type: REMOVE_DISH_SUCCESS});
export const removeDishFailure = error => ({type: REMOVE_DISH_FAILURE, payload: error});

export const getDishesRequest = () => ({type: GET_DISHES_REQUEST});
export const getDishesSuccess = dishes => ({type: GET_DISHES_SUCCESS, payload: dishes});
export const getDishesFailure = error => ({type: GET_DISHES_FAILURE, payload: error});

export const getDishByIdRequest = () => ({type: GET_DISH_BY_ID_REQUEST});
export const getDishByIdSuccess = (id, dish) => ({type: GET_DISH_BY_ID_SUCCESS, payload: {id, dish}});
export const getDishByIdFailure = error => ({type: GET_DISH_BY_ID_FAILURE, payload: error});

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

export const editDish = (dishData, id) => {
    return async dispatch => {
        try {
            dispatch(editDishRequest());
            await axiosApi.put(`/dishes/${id}.json`, dishData);
            dispatch(editDishSuccess());
        } catch (error) {
            dispatch(editDishFailure(error));
        }
    };
};

export const removeDish = id => {
    return async dispatch => {
        try {
            dispatch(removeDishRequest());
            await axiosApi.delete(`/dishes/${id}.json`);
            dispatch(removeDishSuccess());
        } catch (error) {
            dispatch(removeDishFailure(error));
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

export const getDishById = (id) => {
    return async dispatch => {
        try {
            dispatch(getDishByIdRequest());
            const response = await axiosApi.get(`/dishes/${id}.json`);
            dispatch(getDishByIdSuccess(id, response.data));
        } catch (error) {
            dispatch(getDishByIdFailure(error));
        }
    };
};
