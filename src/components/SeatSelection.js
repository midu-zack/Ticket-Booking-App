import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './SeatSelection.css';

const SeatSelection = ({ date }) => {
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [bookedSeats, setBookedSeats] = useState([]);
    console.log()
     // Create an array of seat numbers from 1 to 48 using a for loop
     const seats = [];
     for (let i = 1; i <= 48; i++) {
         seats.push(i);
     }

    const handleBookingSuccess = (seat) => {
        setBookedSeats([...bookedSeats, seat]);
        setSelectedSeat(null);
    };

    return (
        <div>
            {selectedSeat && (
                <BookingForm date={date} seat={selectedSeat} onBookingSuccess={handleBookingSuccess} />
            )}
            <h3>Select a Seat for {date.toDateString()}</h3>
            <div className="seat-grid">
                {seats.map((seat) => (
                    <button
                        key={seat}
                        className={`seat ${bookedSeats.includes(seat) ? 'booked' : ''}`}
                        onClick={() => !bookedSeats.includes(seat) && setSelectedSeat(seat)}
                        disabled={bookedSeats.includes(seat)}
                    >
                        Seat {seat}
                    </button>
                ))}
            </div>
            
        </div>
    );
};

export default SeatSelection;
