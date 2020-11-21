import React from 'react';
import './TodoItem.css';
import { Container,Row,Col,Button } from 'react-bootstrap';

 const TodoItem = (props) =>{



    return (
      <Container>
            <Row >
                <Col className="col-11">
                    <p className="TodoItem" >
                    <input type="checkbox" /> <b>{props.Todo} </b>
                    </p>
                </Col>
                <Col >
                    <Button className="delete-btn"variant="danger">Delete</Button>
                </Col>
            </Row>
        </Container>
 
    );
}
export default TodoItem;