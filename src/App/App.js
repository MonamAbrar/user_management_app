
import { useState } from 'react';

import { list_API } from '../api/api';

import UserList from '../Components/UserList/UserList';
import UserCreate from '../Components/UserCreate/UserCreate';
import UserRead from '../Components/UserRead/UserRead';

import './App.css';


function App() {

  const [createComponentShown, setCreateComponent] = useState(false);
  const [readComponentShown, setReadComponent] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(null);

  const [users, setUsers] = useState([]);
  
  const fetchUsers = () => {
    console.log('fetching...');
    setLoading(true);
    setTimeout(
      () => {
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
      },
      2000
      );
  }


  const showCreateUserComponent = () => { setCreateComponent(true); };
  const closeCreateUserComponent = () => { setCreateComponent(false); };

  const userClickHandler = (id) => {
    setSelectedId(id);
    showReadUserComponent();
  };

  const showReadUserComponent = () => {setReadComponent(true);};
  const closeReadUserComponent = () => {setReadComponent(false);};


  
  return (
    <div>
      <h1>User Management App</h1>
        <>
          <button onClick={showCreateUserComponent}>Create</button>
          {readComponentShown ? <UserRead closeHandler={closeReadUserComponent} fetchUsers={fetchUsers} id={selectedId} /> : '' }
          {createComponentShown ? <UserCreate closeHandler={closeCreateUserComponent} fetchUsers={fetchUsers}/> : ''}
          <UserList
            userClickHandler={userClickHandler}
            users={users}
            isLoading={isLoading}
            isError={isError}
            isSuccess={isSuccess}
            fetchUsers={fetchUsers}
          />
        </>
    </div>
  );
}

export default App;
