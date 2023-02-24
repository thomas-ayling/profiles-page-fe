import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import MyRoutes from './pages/MyRoutes';
import Footer from './components/footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <div className='flex flex-col justify-between min-h-screen'>
          <Navbar />
          <MyRoutes  />
          <Footer />
        </div>
        <ToastContainer position='bottom-right' autoClose={5000} newestOnTop pauseOnFocusLoss closeOnClick={false} draggable theme='colored' />
      </Router>
    </>
  );
}

export default App;
