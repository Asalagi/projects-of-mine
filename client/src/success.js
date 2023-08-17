import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import './app-style.css';

const LoginSuccess = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <h2>You've been successfully logged in!</h2>
      <Link to={`/account/${currentUser.id}`}>Go to my account</Link>
    </div>
  );
};

export default LoginSuccess;