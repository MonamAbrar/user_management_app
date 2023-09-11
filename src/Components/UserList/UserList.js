import React from 'react';

import { useEffect, useState } from 'react';

import CreateUser from '../CreateUser/CreateUser';
import UserDetails from '../UserDetails/UserDetails';
import EditUser from '../EditUser/EditUser';

import { fetchList } from '../../api/api';

import './UserList.css';


const UserList = (props) => {
    
  useEffect(
    () => {
        fetchList()
        .then(response => (response.json()))
        .then(data => setUsers(data))
        // .then(data => {setTimeout(() => {setUsers(data);}, 3000);})
        .catch(error => console.log(error));
    },
    []
  );

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const [createComponentShown, setCreateComponent] = useState(false);
  const [readComponentShown, setReadComponent] = useState(false);
  const [editUserComponentShown, setEditUserComponent] = useState(false);

    
  const showEditUserComponent = () => {
    setEditUserComponent(true);
  };

  const closeEditUserComponent = () => {
    setEditUserComponent(false);
  };

  const showCreateUserComponent = () => {
    setCreateComponent(true);
  };

  const closeCreateUserComponent = () => {
    setCreateComponent(false);
  };

  const showReadUserComponent = (id) => {
    setSelectedUser(id);
    setReadComponent(true);
  };

  const closeReadUserComponent = () => {
    setReadComponent(false);
  };

  const addUser = (user) => {
    setUsers([...users, user])
  }

  const handleDelete = (userId) => {
    const filteredUsers = users.filter((user) => user.id !== userId);
    setUsers(filteredUsers);
    setSelectedUser(null);
    closeReadUserComponent();
  };

  const updateUser = (user) => {
    // const filteredUsers = users.filter((user) => user.id !== selectedUser);
    // setUsers([...filteredUsers, user])
    
    const oldItemIndex = users.findIndex((user) => user.id === selectedUser)
    
    const newArray = [...users];
    newArray.splice(oldItemIndex, 1, user);
    
    setUsers(newArray);
  }

    return (
      <>
            {
                editUserComponentShown ?
                    <EditUser
                        closeHandler={closeEditUserComponent}
                        userDetails={users.find((user) => user.id===selectedUser)}
                        saveHandler={updateUser}
                    />
                :
                    ''
            }
            {
                createComponentShown ?
                    <CreateUser
                        closeHandler={closeCreateUserComponent}
                        saveHandler={addUser}
                    />
                :
                    ''
            }
            {
                readComponentShown ?
                    <UserDetails
                        closeHandler={closeReadUserComponent}
                        id={selectedUser}
                        handleDelete={handleDelete}
                        handleUpdate={showEditUserComponent}
                    />
                :
                    ''
            }
            <div className="user-list">
                <div className="user-list-title-container">
                    <h2>User List</h2>
                    <button onClick={showCreateUserComponent}>Create</button>
                </div>
                
                <ul className="user-list-items">
                    
                    <li className="user-list-item">
                        <div><strong>Name</strong></div>
                        <div><strong>Email</strong></div>
                        <div><strong>City</strong></div>
                    </li>

                    {users.map((user) => (
                        <li
                          onClick={() => {showReadUserComponent(user.id)}}
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
