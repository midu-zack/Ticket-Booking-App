import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SeatSelection from './SeatSelection';
import './Calendar.css';

const CalendarComponent = () => {
    const [date, setDate] = useState(null);

    const onChange = (date) => {
        console.log(date)
        setDate(date);
        
    };

    return (
        <div className="calendar-container">
            <h2>Select a Date</h2>
            <Calendar onChange={onChange} value={date} />
            {date && <SeatSelection date={date} />}
        </div>
    );
};

export default CalendarComponent;
