import React, { useEffect, useState } from 'react';

import EditUser from '../UserUpdate/UserUpdate';

import './UserRead.css';

import { usersAPI } from '../../api/api';

const UserRead = ({ closeHandler, id }) => {

    const[userItem, setUserItem] = useState({});
    const [editUserComponentShown, setEditUserComponent] = useState(false);
    
    const showEditUserComponent = () => {setEditUserComponent(true);};
    const closeEditUserComponent = () => {setEditUserComponent(false);};

    const handleDelete = (userId) => {

        usersAPI.delete(userId).then(response => console.log(response));

    };

    useEffect(
        () => {
            if(id!==null) {

                usersAPI.read(id).then(data => setUserItem(data));

            }
        },
        [id]
        // []
    );

    return (
        <>
            {editUserComponentShown ? <EditUser userDetails={userItem} closeHandler={closeEditUserComponent} />: ''}
            <div className="user-details">
                <h2>Read</h2>
                <div>
                    <p className="user-name">Name: {userItem.name} </p>
                    <p className="user-email">Email: {userItem.email} </p>
                    <p className="user-address-city">City: {userItem?.address?.city}</p>
                </div>
                <div className="user-details-controls">
                    <button onClick={() => {handleDelete(id)}} className="create-button">Delete</button>
                    <button onClick={showEditUserComponent} className="create-button">Update</button>
                    <button onClick={closeHandler} className="create-button">Close</button>
                </div>
            </div>
        </>
    );
};

export default UserRead;