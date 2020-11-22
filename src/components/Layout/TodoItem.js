import React, {Component} from 'react';
import './TodoItem.css';
import { Container,Row,Col,Button } from 'react-bootstrap';
import PropTypes from 'prop-types'; //When we want to set a type that this item gets, We can also set is as required

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
                        <input type="checkbox" onChange={this.toggleComplete} />           
                        <span style={{paddingLeft:'10px'}}><b style={this.componentDidUpdate()}>{this.props.Todo}</b></span>
                        </p>
                    </Col>
                    <Col >
                    {/*pername ton event handle tou App.js me arrow funtion gia na to dei o parent kai deixnoyme to id pou prepeina diagrafei */}
                        <Button className="delete-btn"variant="danger" onClick={()=>this.props.deleteTodo(this.state.todoID)}><i className="fas fa-trash-alt "></i></Button>
                    </Col>
                </Row>
            </Container>
    
        );
    }
}

TodoItem.propTypes={
    deleteTodo:PropTypes.func.isRequired
}

export default TodoItem;