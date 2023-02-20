import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld';
import { store } from './reducers';

function App() {
  return (
    <React.StrictMode>
      <HelloWorld />
    </React.StrictMode>
  );
}

export default App;
