import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ date, seat, onBookingSuccess }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onBookingSuccess(seat);  
    };

    return (
        <div className="booking-form">
            <h3>Booking for Seat {seat} on {date.toDateString()}</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    
                    <input 
                        type="text" 
                        placeholder='Name'
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>
                <div className="form-group">
                    
                    <input 
                        type="tel" 
                        placeholder='Phone number'
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Book</button>
            </form>
        </div>
    );
};

export default BookingForm;
