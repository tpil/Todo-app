import React,{Component} from 'react';
import AddNewToDo from './components/AddNewToDo';
import TodoList from './components/TodoList';
import './App.css';

import { v4 as uuidv4 } from 'uuid'; //to create random ids

class App extends Component {

constructor(){
  super()
  this.state={
    todo : [
        {
            id:uuidv4(),
            item:"wash car",
            completed:false
        },
        {
            id:uuidv4(),
            item:"Cook",
            completed:false
        },
        {
            id:uuidv4(),
            item:"put the trash out",
            completed:false
        },
        {
            id:uuidv4(),
            item:"walk the dog",
            completed:false
        },
        {
            id:uuidv4(),
            item:"Do the dishes",
            completed:false
        }

    ]
  }
}
  
   deleteTodo = (deleteID) =>{
   //console.log(deleteID);
   //Theloume nna ftiaei pinaka me ola ta Todo ektow aut;o poy diagrapsame.  kanoume spread ton hdh yparxon array [... ]
    this.setState({todo:[...this.state.todo.filter(todo=>todo.id!==deleteID)]});
 
}

addTodo = (todoItem) =>{
  const newTodo ={
    id:uuidv4(),
    item: todoItem,
    completed:false
  }
this.setState({todo:[...this.state.todo, newTodo]})
}

render(){
    return(
        <div className="App">
          <header >
          <h1 className="text-center">Todo List</h1>
          </header>
          
          <AddNewToDo addTodo={this.addTodo}/>
          
          {/*Pass todo to the list*/ }
          <TodoList addTodo={this.state.todo} deleteTodo={this.deleteTodo}>
          </TodoList>

      </div>
    );
  }
  
}

export default App;
