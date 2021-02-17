/* eslint-disable react/button-has-type */
import React from 'react';
import { Wrapper } from './styles';

function Button({ children, ...props }) {
  return (
    <Wrapper>
      <button {...props}>{children}</button>
    </Wrapper>
  );
}

export default Button;
