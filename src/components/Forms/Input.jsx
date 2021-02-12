import React from 'react';
import { Wrapper } from './styles';

function Input({
  label, type, name, value, onChange, error, onBlur,
}) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </Wrapper>
  );
}

export default Input;
