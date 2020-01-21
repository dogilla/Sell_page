import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers';
import Navigationbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Navigationbar />
        <Customers />
        <Button bsStyle="primary"> primary </Button>
      </div>
    );
  }
}

export default App;

