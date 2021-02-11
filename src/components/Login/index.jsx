import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginResetPassword from './LoginResetPassword';
import LoginLostPassword from './LoginLostPassword';

const Login = () => (
  <div>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="create" element={<LoginCreate />} />
      <Route path="resetPassword" element={<LoginResetPassword />} />
      <Route path="lostPassword" element={<LoginLostPassword />} />
    </Routes>
  </div>
);

export default Login;
