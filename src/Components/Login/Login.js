import React,{useContext, useState} from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email , setEmail] = useState('')
  const [password , setPassword] =useState('')
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=> {
      navigate('/')
    })
    
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" alt='login' src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
          <Link to= '/signup'>Signup</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
