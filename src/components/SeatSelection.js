import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import BookingForm from "./BookingForm";
import {
  bookSeat,
  selectSeat,
  resetSelectedSeat,
  loadBookingsFromStorage,
} from "../redux/seatSlice";

import "./SeatSelection.css";

const SeatSelection = ({ date }) => {
  const dispatch = useDispatch();
  const { bookings, selectedSeat } = useSelector((state) => state.seats);

  useEffect(() => {
    const storedBookings = JSON.parse(localStorage.getItem("bookings")) || {};
    dispatch(loadBookingsFromStorage(storedBookings));
  }, [dispatch]);

  const formattedDate = date.toDateString();

  const seats = [];
  for (let i = 1; i <= 48; i++) {
    seats.push(i);
  }

  const handleBookingSuccess = (seat) => {
    const updatedBookings = JSON.parse(JSON.stringify(bookings));

    if (!updatedBookings[formattedDate]) {
      updatedBookings[formattedDate] = [];
    }

    if (!updatedBookings[formattedDate].includes(seat)) {
      updatedBookings[formattedDate].push(seat);
    } else {
      alert(`Seat ${seat} is already booked for ${formattedDate}`);
      return;
    }

    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    dispatch(bookSeat({ date: formattedDate, seat }));
    dispatch(resetSelectedSeat());
  };

  return (
    <div>
      {selectedSeat && (
        <BookingForm
          date={date}
          seat={selectedSeat}
          onBookingSuccess={handleBookingSuccess}
        />
      )}

      <h3>Select a Seat for {formattedDate}</h3>

      <div className="seat-grid">
        {seats.map((seat) => (
          <button
            key={seat}
            className={`seat ${
              (bookings[formattedDate] || [] ).includes(seat) ? "booked" : "" }`}
              onClick={() => !(bookings[formattedDate] || [] ).includes(seat) &&
              dispatch(selectSeat(seat))
            }

            disabled={(bookings[formattedDate] || []).includes(seat)}
          >
            Seat {seat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SeatSelection;
