import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import TodoItem from './components/TodoItem';
import './App.css';
import TodoList from './components/TodoList';

const App = () => {

    return(
   
    <div className="App">
      <header >
       <h1 className="text-center">Todo List</h1>
      </header>
      {/*Add new Todo  Component*/ }
      <Container>
        <Row>
          <Col xs={5}>Todo </Col>
          <Col xs={5}> Add Todo button</Col>
        </Row>
    </Container>
    <TodoList>
    </TodoList>
   
    {/* 
    <TodoList>
        <TodoItem />
    </TodoList>
  */ }

    </div>
    );
  
}

export default App;
