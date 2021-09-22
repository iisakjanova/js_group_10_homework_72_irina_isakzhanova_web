import {
    ADD_DISH_FAILURE,
    ADD_DISH_REQUEST,
    ADD_DISH_SUCCESS,
    EDIT_DISH_FAILURE,
    EDIT_DISH_REQUEST,
    EDIT_DISH_SUCCESS,
    GET_DISH_BY_ID_FAILURE,
    GET_DISH_BY_ID_REQUEST,
    GET_DISH_BY_ID_SUCCESS,
    GET_DISHES_FAILURE,
    GET_DISHES_REQUEST,
    GET_DISHES_SUCCESS
} from "../actions/dishesActions";

const initialState = {
    dishes: '',
    loading: false,
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISH_REQUEST:
            return {...state, loading: true};
        case ADD_DISH_SUCCESS:
            return {...state, loading: false};
        case ADD_DISH_FAILURE:
            return {...state, loading: false, error: action.payload};
        case EDIT_DISH_REQUEST:
            return {...state, loading: true};
        case EDIT_DISH_SUCCESS:
            return {...state, loading: false};
        case EDIT_DISH_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_DISHES_REQUEST:
            return {...state, loading: true};
        case GET_DISHES_SUCCESS:
            return {...state, loading: false, dishes: action.payload};
        case GET_DISHES_FAILURE:
            return {...state, loading: false, error: action.payload};
        case GET_DISH_BY_ID_REQUEST:
            return {...state, loading: true};
        case GET_DISH_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                dishes: {
                    ...state.dishes,
                    [action.payload.id]: action.payload.dish
                }};
        case GET_DISH_BY_ID_FAILURE:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
};

export default dishesReducer;