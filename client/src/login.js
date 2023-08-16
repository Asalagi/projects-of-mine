import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
    let history = useHistory();

    const handleLogin = (userCredentials) => {
        axios.post('http://localhost:3001/login', userCredentials)
          .then(response => {
            if(response.data.success){
              setIsLoggedIn(true);
              setCurrentUser(response.data.user);
              history.push(`/members/${response.data.user.id}`);
            } else {
              console.log(response.data.error);
            }
          })
          .catch(error => console.error(`There was an error logging in: ${error}`));
      };
    
      return (
        <div><h2>You have successfully Registered Please Login</h2>
        <div className="login-box">
          <form onSubmit={e => {
            e.preventDefault();
            handleLogin({
              email: e.target.elements.email.value,
              password: e.target.elements.password.value
            });
          }}>
            <h2>Login</h2>
            <input name="email" placeholder="email" required /><br />
            <input name="password" type="password" placeholder="password" required /><br />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
      );
    }
    
    export default Login;