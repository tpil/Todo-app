import React from 'react';
import TodoItem from './TodoItem';

const todoItems = [
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

];

const TodoList = () => {

const todosArray = todoItems.map((todo)=>{
    return <TodoItem key={todo.id}  Todo={todo.item} completed={todo.completed} />

});


    return (
        <div className="list-container"style={{margin:'3px'}}>
             {todosArray}
        </div>
    )
}
export default TodoList;