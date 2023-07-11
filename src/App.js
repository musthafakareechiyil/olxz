import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost'
import Post from './store/PostContext'
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
  
    <Post>
      <Routes>
        <Route  exact path = '/' element = {<Home />}/>          
        <Route path = '/signup' element = {<Signup/>} /> 
        <Route path = '/login' element = {<Login/>} /> 
        <Route path = '/create' element = {<Create/>} /> 
        <Route path = '/view' element = {<View/>} /> 
      </Routes>
      </Post>

  );
}

export default App;
