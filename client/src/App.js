import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import './app-style.css';

import Register from './register';
import Login from './login';
import LoginSuccess from './success';
import UserContext from './UserContext';
import Account from './account'; 
import Members from './members';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const value = useMemo(() => ({ isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser }), [isLoggedIn, currentUser]);

  return (
<UserContext.Provider value={value}>
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/success" element={<LoginSuccess />} />
      <Route path="/register" element={<Register />} />
      <Route path="/account/:id" element={currentUser ? <Account /> : <Navigate to="/login" />} />
      <Route path="/members" element={currentUser ? <Members /> : <Navigate to="/login" />} />
    </Routes>
  </Router>
</UserContext.Provider>
  );
}

export default App;