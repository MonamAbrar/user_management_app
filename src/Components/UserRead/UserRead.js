import React, { useEffect, useState } from 'react';

import UserUpdate from '../UserUpdate/UserUpdate';

import './UserRead.css';

import { delete_API, read_API } from '../../api/api';

import { useDispatch, useSelector } from 'react-redux';
import { interfaceActions } from '../../Redux/interface/interfaceActions';

const UserRead = ({ fetchUsers }) => {

    const dispatch = useDispatch();

    const {isLoading} = useSelector(state => state.api)
    const id = useSelector(state => state.api.selectedUserId); 
    const user = useSelector(state => {
        if (id===null) {return null;}
        return state.api.users.find(user => id===user.id);
    });

    // console.log(id, user);
    
    
    // console.log(user);



    const [userItem, setUserItem] = useState({});
    const [editUserComponentShown, setEditUserComponent] = useState(false);
    
    const showEditUserComponent = () => {setEditUserComponent(true);};
    const closeEditUserComponent = () => {setEditUserComponent(false);};

    const closeHandler = () => { dispatch(interfaceActions.hideReadComponent()); }

    const handleDelete = (userId) => {
        // setLoading(true)
        delete_API(userId)
        .then(response => response.json())
        .then(jsonData => {
            // console.log(jsonData)
            // setLoading(false);
            // setError(false);
            closeHandler();
        }).catch(error => {
            // setLoading(false);
            // setError(error.message);
        })
    };

    useEffect(
        () => {
            if(id!==null) {
                // setLoading(true);
                read_API(id)
                .then(response => response.json())
                .then(data => {
                    // setLoading(false);
                    // setError(false);
                    setUserItem(data)
                }).catch(error => {
                    // setLoading(false);
                    // setError(error.message);
                })
            }
        },
        [id]
        // []
    );

    return (
        <>
            <div className='user-details-container'>
                {editUserComponentShown ? <UserUpdate userDetails={userItem} fetchUsers={fetchUsers} closeHandler={closeEditUserComponent} closeReadComponent={closeHandler}/>: ''}

                { isLoading ?
                    <div className='lds-ring-container'>
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                : '' }

                

                <div className={`user-details ${isLoading ? 'user-details--loading' : ''}`}>
                    <h2>Read</h2>
                    <div>
                        <p className="user-name">Name: {userItem.name} </p>
                        <p className="user-email">Email: {userItem.email} </p>
                        <p className="user-address-city">City: {userItem?.address?.city}</p>
                    </div>

                    {/* { isError ?
                        <div>
                        <p className='error'>Error: {isError}</p>
                        </div>
                    : '' } */}

                    <div className="user-details-controls">
                        <button onClick={() => {handleDelete(id)}} className="create-button">Delete</button>
                        <button onClick={showEditUserComponent} className="create-button">Update</button>
                        <button onClick={closeHandler} className="create-button">Close</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserRead;