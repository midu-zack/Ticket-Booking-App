import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    bookings: {},
    selectedSeat: null,
};

const seatSlice = createSlice({
    name: 'seats',
    initialState,
    reducers: {
        bookSeat: (state, action) => {
            const { date, seat } = action.payload;
        

        if (!state.bookings[date]) {

                state.bookings[date] = [];
            }
            state.bookings[date].push(seat);
        },

       
      
        selectSeat: (state, action) => {
            state.selectedSeat = action.payload;
        },

        resetSelectedSeat: (state) =>   {
            state.selectedSeat = null;
},
        loadBookingsFromStorage: (state, action) => {

            state.bookings = action.payload;
        }
    }
    
});

    

export const { bookSeat, selectSeat, resetSelectedSeat, loadBookingsFromStorage } = seatSlice.actions;
export default seatSlice.reducer;
