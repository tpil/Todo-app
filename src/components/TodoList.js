import React from 'react';
import TodoItem from './TodoItem';
const TodoList = () => {
    return (
        <div className="list-container"style={{margin:'3px'}}>
             <TodoItem Todo="wash car" />
             <TodoItem Todo="cook"/>
             <TodoItem Todo="put the trash out"/>
        </div>
    )
}
export default TodoList;