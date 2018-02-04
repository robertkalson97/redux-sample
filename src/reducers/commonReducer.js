import { types } from '../actions/commonActions';

export const userReducer = (state = {
    counter: 0
}, action) => {
    switch (action.type) {
        case types.INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            };
        default:
            return state;
    }
};

export default userReducer;
