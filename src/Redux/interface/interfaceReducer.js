
const initialState = {
  createComponentShown: false,
  readComponentShown: false,
  editComponentShown: false,
}

// show/hide create component
// show/hide read component
// show/hide edit component


const interfaceReducer = (state = initialState, action) => {
  
  switch(action.type) {
    
    case 'toggleCreateComponent':
      return { ...state, createComponentShown: !state.createComponentShown }
    
    case 'hideCreateComponent':
      return { ...state, createComponentShown: false }

    case 'showReadComponent':
      return {...state, readComponentShown: true}

    case 'hideReadComponent':
      return { ...state, readComponentShown: false }

    case 'showEditComponent':
      return { ...state, editComponentShown: true }

    case 'hideEditComponent':
      return { ...state, editComponentShown: false }
    
    default:
      return state;
  }
}

export default interfaceReducer;