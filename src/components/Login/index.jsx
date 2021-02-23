import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginResetPassword from './LoginResetPassword';
import LoginLostPassword from './LoginLostPassword';
import { UserContext } from '../../UserContext';
import { LoginStyle } from './styles';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <LoginStyle>
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="resetPassword" element={<LoginResetPassword />} />
          <Route path="lostPassword" element={<LoginLostPassword />} />
        </Routes>
      </div>
    </LoginStyle>
  );
};

export default Login;
