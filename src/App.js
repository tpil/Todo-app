import React,{Component} from 'react';

import NewToDo from './components/addNewToDo';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {

render(){
    return(
        <div className="App">
          <header >
          <h1 className="text-center">Todo List</h1>
          </header>
          
          <NewToDo />
          
          {/*Pass todo to the list*/ }
          <TodoList >
          </TodoList>

      </div>
    );
  }
  
}

export default App;
