import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './LoginPage.css';

const LoginPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errMsg, setErrMsg] = useState("");

  const navigater = useNavigate();

  const EventHandler = (e) => {    
      setUser((user) => {
        return { ...user, [e.target.name]: e.target.value }
      })
  }

  const SubmitHandler = (e) => {
    setErrMsg("");
    if (!user.email.match(/\w(@gmail\.com)/)) {
      setErrMsg("Please enter valid email");
    } else {
      localStorage.setItem('userdetails', JSON.stringify({ username: user.username, email: user.email }));
      // console.log(user)
      navigater("/dashboard")
    }
  }

  return (
    <div className='main' >
      <form className='login-form'>
        <label className='form-label'>User Name</label>
        <input className='form-input' type="text" name='username' placeholder="Enter your name" onChange={EventHandler} /><br />

        <label className='form-label'>Email</label>
        {errMsg && <span style={{ color: 'red' }}>{errMsg}</span>}<br />
        <input className='form-input' type="email" name='email' placeholder="Enter your email" onChange={EventHandler} /><br />

        <label className='form-label'>Password</label>
        <input className='form-input' type="password" name='password' placeholder="password" onChange={EventHandler} /><br />

        <button id="btn" type="button" disabled={!user.username || !user.email || !user.password} onClick={SubmitHandler} > Login </button>
      </form>
    </div>
  );
}

export default LoginPage;