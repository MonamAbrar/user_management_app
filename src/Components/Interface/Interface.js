import React from 'react';

import UserList from '../UserList/UserList';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import UserCreate from '../UserCreate/UserCreate';

import UserRead from '../UserRead/UserRead';

import { interfaceActions } from '../../Redux/interface/interfaceActions';


const Interface = () => {

  const dispatch = useDispatch();
  const createComponentShown = useSelector(state => state.interface.createComponentShown);
  const readComponentShown = useSelector(state => state.interface.readComponentShown);

  const createButtonHandler = () => {dispatch(interfaceActions.toggleCreateComponent());}

  return (
    <div>
        <h1>User Management App</h1>
          <button onClick={createButtonHandler}>Create</button>
          {readComponentShown ? <UserRead/> : '' }
          {createComponentShown ? <UserCreate/> : ''}
          <UserList/>
      </div>
  )
}

export default Interface;
