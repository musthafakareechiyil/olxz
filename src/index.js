import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseContext } from './store/FirebaseContext';
import firebase from './firebase/config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{firebase}}>
        <App />
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
