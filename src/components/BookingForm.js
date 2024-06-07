import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/actions';
import Swal from 'sweetalert2';
import './BookingForm.css';

const BookingForm = ({ date, seat, onBookingSuccess }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addBooking({ name, phone, date, seat }));
        setName('');
        setPhone('');
        onBookingSuccess(seat);
        Swal.fire({
            title: 'Booking Confirmed!',
            text: `Seat ${seat} for ${date.toDateString()}`,
            icon: 'success',
            confirmButtonText: 'OK'
        });
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <h3>Book Seat {seat} for {date.toDateString()}</h3>
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
