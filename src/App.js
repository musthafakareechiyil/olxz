import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route  exact path = '/' element = {<Home />}/>          
        <Route path = '/signup' element = {<Signup/>} /> 
      </Routes>
    </div>
  );
}

export default App;
