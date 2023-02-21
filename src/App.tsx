import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import HelloWorld from './components/HelloWorld';
import { store } from './lib/store/store';

function App() {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <HelloWorld />
      </React.StrictMode>
    </Provider>
  );
}

export default App;
