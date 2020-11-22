import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import About from './components/Pages/About';
import Header from './components/Layout/Header';
import AddNewToDo from './components/Layout/AddNewToDo';
import TodoList from './components/Layout/TodoList';
//import { v4 as uuidv4 } from 'uuid'; //to create random ids
import './App.css';
import axios from 'axios';


class App extends Component {

constructor(){
  super()
  this.state={
    todo : []
  }
}
 componentDidMount(){
   //we can limit data  in get if we use ?_limit=num of entries
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res=>this.setState({todo:res.data}));

 } 

deleteTodo = (deleteID) =>{
   //console.log(deleteID);
   /*Theloume na ftiaxei pinaka me ola ta Todo ektos auto poy diagrapsame.  kanoume spread ton hdh yparxon array [... ]
    this.setState({todo:[...this.state.todo.filter(todo=>todo.id!==deleteID)]});*/

  //DELETE request to delete data from server
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${deleteID}`)
      .then(res=>this.setState({todo:[...this.state.todo.filter(todo=>todo.id!==deleteID)]}));
}

addTodo = (todoItem) =>{
  /*const newTodo ={
    id:uuidv4(),
    title: todoItem,
    completed:false
  }
  this.setState({todo:[...this.state.todo, newTodo]})
  */
  //POST request to save new todo to server
axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title: todoItem,
      completed:false
    })
    .then(res=>this.setState({todo:[...this.state.todo, res.data]}));
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
