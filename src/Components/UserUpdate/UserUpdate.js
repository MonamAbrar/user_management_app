import React, { useState } from "react";

// import './UserUpdate.css';
import '../UserCreate/UserCreate.css';


const UserUpdate = ({ closeHandler, saveHandler, userDetails}) => {
    const [name, setName] = useState(userDetails.name);  // useState('');
    const [email, setEmail] = useState(userDetails.email);  // useState('');
    const [website, setWebsite] = useState(userDetails.website);  // useState('');
    const [city, setCity] = useState(userDetails?.address?.city);  // useState('');
    const [street, setStreet] = useState(userDetails?.address?.street);  // useState('');


    const updateHandler = () => {
        const updatedUserObject = {
            id: userDetails.id,
            name,
            email,
            website,
            address: {
                city,
                street,
            },
        };
        console.log(`update api call`)
    }

    return (
        <div className="create-user">
            <h2>Update</h2>
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
                <button onClick={updateHandler} className="create-button">Confirm</button>
                <button onClick={closeHandler} className="create-button">Cancel</button>
            </div>
        </div>
    );
};

export default UserUpdate;