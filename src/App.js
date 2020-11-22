import React,{Component} from 'react';

import AddNewToDo from './components/addNewToDo';
import TodoList from './components/TodoList';
import './App.css';



class App extends Component {

constructor(){
  super()
  this.state={
    todo : [
        {
            id:1,
            item:"wash car",
            completed:false
        },
        {
            id:2,
            item:"Cook",
            completed:false
        },
        {
            id:3,
            item:"put the trash out",
            completed:false
        },
        {
            id:4,
            item:"walk the dog",
            completed:false
        },
        {
            id:5,
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

render(){
    return(
        <div className="App">
          <header >
          <h1 className="text-center">Todo List</h1>
          </header>
          
          <AddNewToDo />
          
          {/*Pass todo to the list*/ }
          <TodoList addTodo={this.state.todo} deleteTodo={this.deleteTodo}>
          </TodoList>

      </div>
    );
  }
  
}

export default App;
