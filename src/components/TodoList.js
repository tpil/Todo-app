import React,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types'; //When we want to set a tpe that this list gets, We can also set is as required




class TodoList extends Component{
        constructor(props){
            super(props);
            

        }

   
   
           render(){
         
            
            const todosArray = this.props.addTodo.map((todo)=>{
             
                return <TodoItem key={todo.id} id={todo.id}  Todo={todo.item} completed={todo.completed} deleteTodo={this.props.deleteTodo}/>
            
            })

                    return (
                        <div className="list-container"style={{margin:'3px'}}>
                            {todosArray}
                            
                        </div>
                    );         
            }
}
TodoList.propTypes={
    addTodo:PropTypes.array.isRequired
}
export default TodoList;

