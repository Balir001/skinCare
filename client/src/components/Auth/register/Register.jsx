import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import { register } from '../../../features/auth/auth';na
import {useNavigate} from 'react-router-dom'

function Register() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log('Email:', email);
    console.log('Password:', password);
    dispatch(register({email,password} )).then(action=>{
      localStorage.setItem('accessToken',action.payload.token)
      navigate('/')
    })
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
