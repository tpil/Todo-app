import React, {Component} from 'react';
import './TodoItem.css';
import { Container,Row,Col,Button } from 'react-bootstrap';

 class TodoItem extends Component{
        constructor(props){
            super(props);
            this.state={
                todoCompletion:this.props.completed,
                todoID:this.props.id
            }
        }

    toggleComplete = (e) =>{
        if (this.state.todoCompletion === false){
            this.setState({todoCompletion:true});
           
        }else{
            this.setState({todoCompletion:false});
          
        }

    }

    deleteTodo = (e) =>{
        console.log(`The item id is: ${this.state.todoID}`);

    }
    componentDidUpdate() {
      if (this.state.todoCompletion === true){
            return {textDecoration:"line-through"}
      }else{
        return {textDecoration:"none"}
      }

    }
    render(){
        return (
        <Container>
                <Row >
                    <Col className="col-11">
                        <p className="TodoItem" >
                        <input type="checkbox" onChange={this.toggleComplete}/>           
                        <span style={{paddingLeft:'10px'}}><b style={this.componentDidUpdate()}>{this.props.Todo}</b></span>
                        </p>
                    </Col>
                    <Col >
                        <Button className="delete-btn"variant="danger" onClick={this.deleteTodo}><i className="fas fa-trash-alt "></i></Button>
                    </Col>
                </Row>
            </Container>
    
        );
    }
}
export default TodoItem;