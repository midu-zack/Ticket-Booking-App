// Action types
export const ADD_BOOKING = 'ADD_BOOKING';

// Action creator
export const addBooking = (booking) => ({
    type: ADD_BOOKING,
    payload: booking,
});
