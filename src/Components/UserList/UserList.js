import React from 'react';

import { useEffect, useState } from 'react';


import { list_API } from '../../api/api';

import './UserList.css';


const UserList = ({ userClickHandler, users, isLoading, isSuccess, isError, fetchUsers }) => {

      
  useEffect(
    () => {fetchUsers();},
    []
  );



    return (
      <>

        <div className='user-list-container'>
          {/* <button onClick={forceApiCall}>Refresh List</button> */}


          { isLoading ?
            <div className='lds-ring-container'>
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            </div>
          : '' }


          <div className={`user-list`}>
            <div className="user-list-title-container">
                <h2>List</h2>
            </div>

            <ul className={`user-list-items ${isLoading ? 'user-list-items--loading' : ''}`}>
                
                <li className="user-list-item">
                    <div><strong>Name</strong></div>
                    <div><strong>Email</strong></div>
                    <div><strong>City</strong></div>
                </li>

                { isError ?
                    <div>
                      <p className='error'>{isError}</p>
                    </div>
                  : 
                    users.map((user) => (
                        <li
                        onClick={() => {userClickHandler(user.id)}}
                        key={user.id}
                        className="user-list-item"
                        >
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div>{user.address.city}</div>
                        </li>
                    ))
                  }

            </ul>
            
          </div>

        </div>
      </>
    );
};

export default UserList;
