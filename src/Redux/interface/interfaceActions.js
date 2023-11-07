

const toggleCreateComponent = () => {
  return {type: 'toggleCreateComponent'}
}

const showReadComponent = (id) => {
  return {
    type: 'showReadComponent',
    payload: {
      selectedUserId: id,
    },
  }
}

const hideReadComponent = () => {
  return {type: 'hideReadComponent'}
}


export const interfaceActions = {
  toggleCreateComponent,
  showReadComponent,
  hideReadComponent,
}

