import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/learning-examples/firstComponent';
import SecondComponent from './components/learning-examples/secondComponent'; 
import {ThirdComponent} from './components/learning-examples/thirdComponent'; // for non-default exports we need to use curly braces
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