import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import EventsDetails from '../EventsDetails/EventsDetails';

const Events = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [event, setEvent] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/createWork?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setEvent(data));
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    event.map(work => <EventsDetails work={work}></EventsDetails>)
                }
            </div>
        </div>
    );
};

export default Events;