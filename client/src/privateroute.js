import React, { useContext } from 'react';
import { Routes, Navigate} from 'react-router-dom';
import UserContext from './UserContext';


function PrivateRoute({ ...rest }) {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Routes
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <div>Congrats, you're logged in!</div>
        ) : (
          <Navigate to={{
            pathname: "/login",
            state: { from: location }
          }}/>
        )
      }
    />
  );
}

export default PrivateRoute;