import { ADD_BOOKING } from './actions';

// Initial state
const initialState = {
    bookings: [],
};

// Reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
            };
        default:
            return state;
    }
};

export default rootReducer;
