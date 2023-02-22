import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Routes from './components/Routes';

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <Routes />
        <Homepage />
      </Router>
    </>
  );
}

export default App;
