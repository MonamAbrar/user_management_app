import React from 'react';

import { useEffect, useState } from 'react';


import { list_API } from '../../api/api';

import './UserList.css';


const UserList = ({ userClickHandler }) => {

  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
    
  useEffect(
    () => {
      setLoading(true);
        list_API()
        .then(response => (response.json()))
        .then(data => {
          setLoading(false);
          setUsers(data);
          setSuccess(true);
        })
        .catch(error => {
          setLoading(false);
          setError(true);
          console.log(error)
        });
    },
    []
  );

  const [users, setUsers] = useState([]);


    return (
      <>

        { isLoading ? <p>Fetching users...</p> : '' }
        { isSuccess ? <p>Users fetched successfully</p> : '' }
        { isError ? <p>Error - unable to fetch users</p> : '' }

        <div className="user-list">
          <div className="user-list-title-container">
              <h2>List</h2>
          </div>

          <ul className="user-list-items">
              
              <li className="user-list-item">
                  <div><strong>Name</strong></div>
                  <div><strong>Email</strong></div>
                  <div><strong>City</strong></div>
              </li>

              {users.map((user) => (
                  <li
                    onClick={() => {userClickHandler(user.id)}}
                    key={user.id}
                    className="user-list-item"
                  >
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                      <div>{user.address.city}</div>
                  </li>
              ))}

          </ul>
        </div>

      </>
    );
};

export default UserList;
