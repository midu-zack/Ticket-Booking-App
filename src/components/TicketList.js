import React from 'react';
import { useSelector } from 'react-redux';

const TicketList = () => {
    const tickets = useSelector((state) => state.tickets);

    return (
        <div>
            <h2>Booked Tickets</h2>
            <ul>
                {tickets.map((ticket, index) => (
                    <li key={index}>
                        {ticket.name} - {ticket.event}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TicketList;
