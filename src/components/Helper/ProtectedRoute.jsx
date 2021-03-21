import React from 'react';
import { Navigate, Route } from 'react-router';
import { UserContext } from '../../UserContext';

export default function ProtectedRoute(props) {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Route {...props} />;
  if (login === false) return <Navigate to="/login" />;
  return null;
}
