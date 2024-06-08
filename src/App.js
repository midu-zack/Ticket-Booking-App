import React from 'react';
import CalendarComponent from './components/Calendar';
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <h1 className="app-heading">Ticket Booking App</h1>
            <CalendarComponent />
        </div>
    );
};

export default App;
