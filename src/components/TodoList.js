import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //When we want to set a tpe that this list gets, We can also set is as required


const todo = [
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
const todosArray = todo.map((todo)=>{
    return <TodoItem key={todo.id} id={todo.id}  Todo={todo.item} completed={todo.completed}  />

})

class TodoList extends Component{

    constructor(){

        super();
        
    } 

    
          
                render(){
                    return (
                        <div className="list-container"style={{margin:'3px'}}>
                            {todosArray}
                            
                        </div>
                    );
                }

               
}

TodoList.propTypes={
    todos:PropTypes.array.isRequired
}
export default TodoList;

