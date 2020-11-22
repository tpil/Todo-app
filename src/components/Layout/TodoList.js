import React,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //When we want to set a type that this list gets, We can also set is as required




class TodoList extends Component{
   
   
           render(){
         
            
            const todosArray = this.props.addTodo.map((todo)=>{
             
                return <TodoItem key={todo.id} id={todo.id}  Todo={todo.title} completed={todo.completed} deleteTodo={this.props.deleteTodo}/>
            
            })

                    return (
                        <div style={{margin:'3px'}}>
                            {todosArray}
                            
                        </div>
                    );         
            }
}
TodoList.propTypes={
    addTodo:PropTypes.array.isRequired,
    deleteTodo:PropTypes.func.isRequired
}
export default TodoList;

