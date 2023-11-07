
const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  users: [],
  selectedUserId: null,
}


const apiReducer = (state = initialState, action) => {
  
  switch(action.type) {
    
    case 'fetchUserListStart':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }

    case 'fetchUserListSuccess': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        users: action.payload.users,
      }
    }

    case 'fetchUserListError': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      }
    }

    case 'createUserStart':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }

    case 'createUserSuccess': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        users: [...state.users, action.payload.user]
      }
    }

    case 'createUserError': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      }
    }

    case 'showReadComponent': {
      return {
        ...state,
        selectedUserId: action.payload.selectedUserId,
      }
    }

    case 'readUserStart':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      }

    case 'readUserSuccess': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
      }
    }

    case 'readUserError': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      }
    }

    
    default:
      return state;
  }
}

export default apiReducer;