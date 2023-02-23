import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/navbar/Navbar';
import Routes from './components/Routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes />
        <Homepage />
        <ToastContainer position='bottom-right' autoClose={5000} newestOnTop pauseOnFocusLoss draggable theme='colored' />
      </Router>
    </>
  );
}

export default App;
