// import React, { useState, useEffect } from 'react';
import UserList from '../Components/UserList/UserList';
// import UserDetails from '../Components/UserDetails/UserDetails';
// import CreateUser from '../Components/CreateUser/CreateUser';
// import EditUser from '../Components/EditUser/EditUser';

import './App.css';

function App() {

  // const handleCreateUser = (newUser) => {

  //   const updatedUsers = [...users, newUser];
  //   setUsers(updatedUsers);
  // };

  // const handleUpdateUser = (updatedUser) => {

  //   const updatedUsers = users.map((user) => 
  //   user.id === updatedUser.id ? updatedUser : user
  //   );
  //   setUsers(updatedUsers);

  //   setSelectedUser(null);
  // };

  return (
    <div>
      <h1>User Management App</h1>
        <>
          <UserList/>
          {/* <UserDetails/> */}
          {/* <CreateUser onCreateUser={handleCreateUser} /> */}

          {/* {selectedUser && (
            <EditUser user={selectedUser} onUpdateUser={handleUpdateUser} />
          )} */}
        </>
    </div>
  );
}

export default App;
