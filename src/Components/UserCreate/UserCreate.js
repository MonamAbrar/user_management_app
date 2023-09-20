import React, { useState } from 'react';

import { create_API } from '../../api/api';

import './UserCreate.css';

const UserCreate = ({ closeHandler}) => {

    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [isError, setError] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');

    const onSave = () => {
        const newUser = {
            name,
            email,
            website,
            address: {
                city,
                street,
            }
        }

        setLoading(true);
        create_API(newUser)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            setLoading(false);
            setError(false);
            closeHandler();
        }).catch((error) => {
            setLoading(false);
            setError(error.message);
        })
    }

    return (
        <div className={`create-user ${isLoading ? 'create-user--loading' : ''}`}>

            { isLoading ?
                <div className='lds-ring-container'>
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>
            : '' }
            
            <h2>Create</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="user-input"
            />
            <input
                type="text"
                placeholder="Street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                className="user-input"
            />
            
            { isError ?
                <div>
                <p className='error'>Error: {isError}</p>
                </div>
            : '' }

            <div className='create-user-controls'>
                <button onClick={onSave} className="create-button">Save</button>
                <button onClick={closeHandler} className="create-button">Cancel</button>
            </div>
        </div>
    );
};

export default UserCreate;