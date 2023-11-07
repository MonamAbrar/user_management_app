import React, { useState } from 'react';

import { create_API } from '../../api/api';

import './UserCreate.css';

import { useDispatch, useSelector } from 'react-redux';

import { apiActions } from '../../Redux/api/apiActions';

import { interfaceActions } from '../../Redux/interface/interfaceActions';

const UserCreate = ({fetchUsers}) => {

    const dispatch = useDispatch();

    const {isLoading, isSuccess, isError} = useSelector(state => state.api);

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

        dispatch(apiActions.createUserStart());

        // setLoading(true);
        create_API(newUser)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            dispatch(apiActions.createUserSuccess(data));;
            closeHandler();
        }).catch((error) => {
            // setLoading(false);
            // setError(error.message);
        })
    }

    const closeHandler = () => { dispatch(interfaceActions.toggleCreateComponent()); }

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