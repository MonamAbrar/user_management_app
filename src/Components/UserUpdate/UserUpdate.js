import React, { useState } from "react";

import { update_API } from "../../api/api";
import './UserUpdate.css';
import { useDispatch, useSelector } from "react-redux";
import { apiActions } from "../../Redux/api/apiActions";


const UserUpdate = ({ closeHandler, saveHandler, userDetails, fetchUsers, closeReadComponent}) => {

    const {isLoading, isError, isSuccess, selectedUserId} = useSelector(state => state.api);
    const user = useSelector(state => state.api.users.find(user => selectedUserId === user.id) )
    
    const dispatch = useDispatch();

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
        
        dispatch(apiActions.updateUserStart());
        update_API(userDetails.id, updatedUser)
        .then(response => response.json())
        .then(jsonData => {
            console.log(jsonData);
            // fetchUsers();
            dispatch(apiActions.updateUserSuccess(jsonData))
        }).catch(error => {
            console.log(error);
            // setLoading(false);
            // setError(error.message);
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