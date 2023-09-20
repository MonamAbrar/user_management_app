import React, { useState } from "react";

import { update_API } from "../../api/api";
import './UserUpdate.css';
// import '../UserCreate/UserCreate.css';


const UserUpdate = ({ closeHandler, saveHandler, userDetails}) => {

    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [isError, setError] = useState(null);

    const [name, setName] = useState(userDetails.name);  // useState('');
    const [email, setEmail] = useState(userDetails.email);  // useState('');
    const [website, setWebsite] = useState(userDetails.website);  // useState('');
    const [city, setCity] = useState(userDetails?.address?.city);  // useState('');
    const [street, setStreet] = useState(userDetails?.address?.street);  // useState('');


    const updateHandler = () => {
        const updatedUser = {
            name,
            email,
            website,
            address: {
                city,
                street,
            },
        };
        setLoading(true);
        update_API(userDetails.id, updatedUser)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData)
            setError(false)
            setLoading(false);
        }).catch(error => {
            setLoading(false);
            setError(error.message);
        })
    }

    return (
        <>

            <div className='update-user-container'>
                
                { isLoading ?
                    <div className='lds-ring-container'>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                : '' }

                <div className={`create-user  ${isLoading? 'update-user--loading' : ''}`}>
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

                    { isError ?
                        <div>
                        <p className='error'>Error: {isError}</p>
                        </div>
                    : '' }

                    <div className='create-user-controls'>
                        <button onClick={updateHandler} className="create-button">Confirm</button>
                        <button onClick={closeHandler} className="create-button">Cancel</button>
                    </div>
                </div>

            </div>

        </>
    );
};

export default UserUpdate;