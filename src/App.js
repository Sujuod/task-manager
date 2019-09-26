import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './configureStore';
import Task from './Task'

function App() {
  return (
    <Provider store={store}>
      <header class="header-fixed">Task Manager with Redux</header>
      <div>
        <Task />
      </div>
    </Provider>
  );
}

export default App;
