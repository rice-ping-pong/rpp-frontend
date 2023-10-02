import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { genericPost } from './api';

function App() {
  return (
    <GoogleOAuthProvider clientId="554980282359-9vhi3i6g9g047b88o10g4hjca84uul1v.apps.googleusercontent.com">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GoogleLogin
          onSuccess={credentialResponse => {
            // make a data object with the credentialResponse
            const data = {
              "token": credentialResponse.credential,
            };
            genericPost('/auth', data).then((response) => {
              console.log('Login Success', response);
            });
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </header>
    </div>
    </GoogleOAuthProvider>
  );
}

export default App;
