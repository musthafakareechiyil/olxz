import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import {Route, Routes } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
    return ()=>{
      
    }
  })
  return (
    <div>
      <Routes>
        <Route  exact path = '/' element = {<Home />}/>          
        <Route path = '/signup' element = {<Signup/>} /> 
        <Route path = '/login' element = {<Login/>} /> 
      </Routes>
    </div>
  );
}

export default App;
