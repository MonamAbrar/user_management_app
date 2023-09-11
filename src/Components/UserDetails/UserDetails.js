import React, { useEffect, useState } from 'react';

import './UserDetails.css';

import { fetchItem } from '../../api/api';

const UserDetails = ({ closeHandler, id, handleDelete, handleUpdate }) => {

    const[userItem, setUserItem] = useState({});

    useEffect(
        () => {
            if(id!==null) {
                fetchItem(id)
                .then(response => response.json())
                .then(data => setUserItem(data))
            }
        },
        [id]
        // []
    );

    return (
        <div className="user-details">
            <h2>User Details</h2>
            <div>
                <p className="user-name">Name: {userItem.name} </p>
                <p className="user-email">Email: {userItem.email} </p>
                <p className="user-address-city">City: {userItem?.address?.city}</p>
            </div>
            <div className="user-details-controls">
                <button onClick={() => {handleDelete(id)}} className="create-button">Delete</button>
                <button onClick={handleUpdate} className="create-button">Update</button>
                <button onClick={closeHandler} className="create-button">Close</button>
            </div>
        </div>
    );
};

export default UserDetails;