import React, { useState } from 'react';

import './CreateUser.css';

const CreateUser = ({ closeHandler, saveHandler}) => {
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
        saveHandler(newUser);
    }

    return (
        <div className="create-user">
            <h2>Create User</h2>
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
            <div className='create-user-controls'>
                <button onClick={onSave} className="create-button">Save</button>
                <button onClick={closeHandler} className="create-button">Cancel</button>
            </div>
        </div>
    );
};

export default CreateUser;