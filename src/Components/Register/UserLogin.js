// src/UserLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const navigation = useNavigate()
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');

  const handleLoginEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPassChange = (event) => {
    setLoginPass(event.target.value);
  };

  const handleLogin = () => {
    if (localStorage.getItem('UsersLogin')) {
      const loginDeets = JSON.parse(localStorage.getItem('UsersLogin'));
      if (loginEmail === loginDeets.email && loginPass === loginDeets.password) {
        navigation('/dasboard')
        console.log('Login successful');
      } else {
        console.log('Wrong credentials');
        alert('Wrong credentials')
      }
    } else {
      console.log('Not a registered user');
      alert('Not a registered user')
    }
  };

  return (
    <div style={{ height: '100vh', backgroundColor: '#07468f', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

    <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'white', width: '40vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 50 }}>
    <h2 style={{ color: 'black', marginBottom: 20 }}>User Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={loginEmail}
        onChange={handleLoginEmailChange}
        style={{
            width: '25vw', height: '5vh', borderRadius: 10, margin: 5, borderColor: 'blue',
            paddingLeft: 5
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPass}
        onChange={handleLoginPassChange}
        style={{
            width: '25vw', height: '5vh', borderRadius: 10, margin: 5, borderColor: 'blue',
            paddingLeft: 5
        }}
      />
      <button style={{ width: '25vw', height: '5vh', borderRadius: 10, marginTop: 10, backgroundColor: '#07468f', color: 'white' }} onClick={handleLogin}>Login</button>
      <p>Don't have account?<span style={{color:'blue',cursor: "pointer",marginTop:5}} onClick={()=>navigation('/signup')}>SignUp</span></p>
    </div>
    </div>
  );
};

export default UserLogin;
