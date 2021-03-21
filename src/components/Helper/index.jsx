import React from 'react';
import Content from './styles';

const Error = ({ error }) => {
  if (!error) return null;
  return <Content>{error}</Content>;
};

export default Error;
