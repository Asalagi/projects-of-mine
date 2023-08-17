import React from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';
import './app-style.css';

function Login() {
  const { setIsLoggedIn, setCurrentUser } = useContext(UserContext);
  const history = useNavigate();

    const handleLogin = (userCredentials) => {
        axios.post('http://localhost:3001/login', userCredentials)
          .then(response => {
            if(response.data.success){
              setIsLoggedIn(true);
              setCurrentUser(response.data.user);
              history.push(`/members/${response.data.user.id}`);
            } else {
              console.error(response.data.error);
            }
          })
          .catch(error => console.error(`There was an error logging in: ${error}`));
      };
    
      return (
        <div><h2>You have successfully Registered Please Login</h2>
        <div className="reg-box">
          <form onSubmit={e => {
            e.preventDefault();
            handleLogin({
              email: e.target.elements.email.value,
              password: e.target.elements.password.value
            });
          }}>
            <h2>Login</h2>
            <input className="input-text" name="email" placeholder="email" required /><br />
            <input className="input-text" name="password" type="password" placeholder="password" required /><br />
            <button className="btn-center-submit" type="submit">Login</button>
          </form>
        </div>
      </div>
      );
    }
    
    export default Login;