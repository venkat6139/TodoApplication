import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1 className='heading'>To-Do Application</h1>
          <TaskInput />
          <TaskList />
        </div>
      </Provider>
    );
  }
}

export default App;
