import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap'

const App = () => {
  return (
    <div className="App">
      <button className="btn btn-primary">Test Me</button>
      <Card style={{ width: '18rem' }}>
        <Card.Title>Board 1</Card.Title>
        <Card.Body>This is where you display your boards.</Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Title>Board 1</Card.Title>
        <Card.Body>This is where you display your boards.</Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Title>Board 1</Card.Title>
        <Card.Body>This is where you display your boards.</Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Title>Board 1</Card.Title>
        <Card.Body>This is where you display your boards.</Card.Body>
      </Card>


    </div>
  );
};

export default App;
