import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';
class NewToDo extends Component {
    constructor(){
        super();
        this.state={}
    }
    render() {
        return (
            <Form  style={{padding:'10px'}}>
                <Form.Row className='d-flex bd-highlight'>
                    <Form.Group className="col-10" controlId="newTodo">
                    <Form.Control type="text" placeholder="Enter a new todo" />
                    </Form.Group>

                    <Form.Group >
                    <Button variant="primary" type="submit">
                    <i className="fas fa-plus"></i> Add new Todo
                    </Button>
                    </Form.Group>
                </Form.Row>
            </Form>

        )
    }
}
export default NewToDo;