
import { useState } from 'react';

import Interface from '../Components/Interface/Interface';

import store from '../Redux/store';

import { Provider } from 'react-redux';

import './App.css';

function App() {
  
  return (
    <Provider store={store}>
      <Interface/>
    </Provider>
  );
}

export default App;
