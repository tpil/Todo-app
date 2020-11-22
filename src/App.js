import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import About from './components/Pages/About';
import Header from './components/Layout/Header';
import AddNewToDo from './components/Layout/AddNewToDo';
import TodoList from './components/Layout/TodoList';
import { v4 as uuidv4 } from 'uuid'; //to create random ids
import './App.css';

class App extends Component {

constructor(){
  super()
  this.state={
    todo : [
        {
            id:uuidv4(),
            item:"walk the dog",
            completed:false
        },
        {
            id:uuidv4(),
            item:"Cook dinner",
            completed:false
        },
        {
            id:uuidv4(),
            item:"put the trash out",
            completed:false
        },
        {
            id:uuidv4(),
            item:"go to the dentist",
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
   //Theloume na ftiaxei pinaka me ola ta Todo ektos auto poy diagrapsame.  kanoume spread ton hdh yparxon array [... ]
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
      <Router>
        <div className="App">
          <Header />
         
          {/* me to exact peririsoume to route mono se auto to path*/}
          <Route exact path='/' render={props => (
              <React.Fragment>
                <AddNewToDo addTodo={this.addTodo}/>
                {/*Pass todo to the list*/ }
                <TodoList addTodo={this.state.todo} deleteTodo={this.deleteTodo}/>
              </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
          
      </div>
      </Router>
    );
  }
  
}

export default App;
