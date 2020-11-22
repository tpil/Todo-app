import React, { Component } from 'react'
import { Button,Form } from 'react-bootstrap';

class AddNewToDo extends Component {
    constructor(){
        super();
        this.state={
            newTodo:'',
            submitDisabled:true
        }
    }

    onChange =(e) =>{
        //Se periptosh pou eixame forma me polla input mporoume na orizoume to name tou input idio me to ta state  wste na mh xreiazetai na kanume event handler gia ola ta input
        this.setState({[e.target.name]:e.target.value});

         /*An exoume ena mono input
       // this.setState({newTodo:e.target.value});
       // console.log(e.target.value);*/
       
        if(e.target.value!==''){
            this.setState({submitDisabled:false})
        }
       
    }
    onSubmit =(e)=>{
        e.preventDefault(); //apagoreuoyme na ginei to submit sto idio arxeio AddNewToDo.js
        this.props.addTodo(this.state.newTodo);
        this.setState({newTodo:''});
        this.setState({submitDisabled:true});
    }

    render() {
        return (
            <div style={{margin:"auto",width:'95%'}}>
            <Form  style={{padding:'10px'}} onSubmit={this.onSubmit}>
                <Form.Row className='d-flex bd-highlight'>
                    <Form.Group className="col-10" controlId="newTodo">
                    <Form.Control name='newTodo' value={this.state.newTodo} type="text" placeholder="Enter a new todo" onChange={this.onChange}/>
                    </Form.Group>

                    <Form.Group >
                    <Button variant="primary" type="submit" disabled={this.state.submitDisabled}>
                    <i className="fas fa-plus"></i> Add new Todo
                    </Button>
                    </Form.Group>
                </Form.Row>
            </Form>
           </div>

        )
    }
}
export default AddNewToDo;