

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

export const apiActions = {
  fetchUserListStart,
  fetchUserListSuccess,
  createUserStart,
  createUserSuccess,
  readUserStart,
  readUserSuccess,
  updateUserStart,
  updateUserSuccess,
}