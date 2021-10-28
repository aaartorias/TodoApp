import React, { Component } from 'react';
import './App.css';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* My TODO APP */}
      {/* <FirstComponent />
      <SecondComponent />
      <ThirdComponent /> */}
      <TodoApp/>
      </div>
    );
  }
}


export default App;