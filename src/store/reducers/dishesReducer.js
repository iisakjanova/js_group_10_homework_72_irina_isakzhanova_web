import {
    ADD_DISH_FAILURE,
    ADD_DISH_REQUEST,
    ADD_DISH_SUCCESS
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
        default:
            return state;
    }
};

export default dishesReducer;