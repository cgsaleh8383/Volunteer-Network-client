import React, { useEffect, useState } from 'react';
import AdminData from '../AdminData/AdminData';

const Admin = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/createWork')
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, [])
    return (
        <div className="container">
            <h1>you have Bookings: {admins.length}</h1>
            <div className="row">
                {
                    admins.map(works => <AdminData works={works}></AdminData>)
                }
            </div>
        </div>
    );
};

export default Admin;