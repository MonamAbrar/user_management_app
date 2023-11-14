import { list_API } from "../../api/api";


const fetchUserListStart = () => {
  return {type: 'fetchUserListStart'};
}

const fetchUserListSuccess = (users) => {
  return {
    type: 'fetchUserListSuccess',
    payload: {
      users
    }
  };
}

const createUserStart = () => {
  return {type: 'createUserStart'};
}

const createUserSuccess = (user) => {
  return {
    type: 'createUserSuccess',
    payload: {
      user
    }
  };
}

const readUserStart = () => {
  return {type: 'readUserStart'};
}

const readUserSuccess = (user) => {
  return {
    type: 'readUserSuccess',
    payload: {
      user
    }
  };
}

const updateUserStart = () => {
  return {type: 'updateUserStart'};
}

const updateUserSuccess = (user) => {
  return {
    type: 'updateUserSuccess',
    payload: { user }
  };
}


const fetchUsersThunk = (dispatch, getState) => {
  console.log(getState());
  dispatch(apiActions.fetchUserListStart());
  list_API()
    .then(response => (response.json()))
    .then(data => {
      dispatch(apiActions.fetchUserListSuccess(data));
      console.log(getState());
    })
    .catch(error => {
    });
}


export const apiActions = {
  fetchUserListStart,
  fetchUserListSuccess,
  createUserStart,
  createUserSuccess,
  readUserStart,
  readUserSuccess,
  updateUserStart,
  updateUserSuccess,
  fetchUsersThunk,
}