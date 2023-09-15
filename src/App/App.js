
import { useState } from 'react';

import UserList from '../Components/UserList/UserList';
import UserCreate from '../Components/UserCreate/UserCreate';
import UserRead from '../Components/UserRead/UserRead';

import { getRestfulAPI } from '../api/api';

import './App.css';


function App() {

  const [createComponentShown, setCreateComponent] = useState(false);
  const [readComponentShown, setReadComponent] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const showCreateUserComponent = () => { setCreateComponent(true); };
  const closeCreateUserComponent = () => { setCreateComponent(false); };

  const userClickHandler = (id) => {
    setSelectedId(id);
    showReadUserComponent();
  };

  const showReadUserComponent = () => {setReadComponent(true);};
  const closeReadUserComponent = () => {setReadComponent(false);};

  const usersAPI = getRestfulAPI('https://jsonplaceholder.typicode.com', 'users');


  
  return (
    <div>
      <h1>User Management App</h1>
        <>
          <button onClick={showCreateUserComponent}>Create</button>
          {readComponentShown ? <UserRead closeHandler={closeReadUserComponent} id={selectedId} /> : '' }
          {createComponentShown ? <UserCreate closeHandler={closeCreateUserComponent}/> : ''}
          <UserList userClickHandler={userClickHandler}/>
        </>
    </div>
  );
}

export default App;
