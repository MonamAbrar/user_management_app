import React from 'react';

import { useEffect, useState } from 'react';


import { list_API } from '../../api/api';

import './UserList.css';


const UserList = ({ userClickHandler }) => {

  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(null);
    
  useEffect(
    () => {
      setLoading(true);
        list_API()
        .then(response => (response.json()))
        .then(data => {
          setLoading(false);
          setError(null);
          setSuccess(true);
          setUsers(data);
        })
        .catch(error => {
          setLoading(false);
          setError(true);
        });
    },
    []
  );

  
  const forceApiCall = () => {
    setLoading(true);  
    list_API()
      .then(response => (response.json()))
      .then(data => {
        setLoading(false);
        setError(null);
        setSuccess(true);
        setUsers(data);
      })
      .catch(error => {
        setLoading(false);
        setError(error.message);
      });
  }



  const [users, setUsers] = useState([]);


    return (
      <>

        <button onClick={forceApiCall}>Refresh List</button>

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

      </>
    );
};

export default UserList;
