import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import UserContext from './UserContext';
import './app-style.css';

const LoginSuccess = () => {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h2>Welcome {currentUser.username} (#{currentUser.id})! </h2>
    </div>
  );
};

export default LoginSuccess;