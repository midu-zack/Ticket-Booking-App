import React from 'react';
import CalendarComponent from './components/Calendar';
import './App.css';

const App = () => {
    return (
        <div>
            <h1 className='app' >Ticket Booking App</h1>
            <CalendarComponent />
        </div>
    );
};

export default App;
