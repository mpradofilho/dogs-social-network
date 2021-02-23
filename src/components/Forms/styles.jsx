import styled from 'styled-components';

export const Wrapper = styled.div`
margin-bottom: 1rem;

input {
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #eee;
  transition: 0.3s;
}

input:focus,
input:hover {
  outline: none;
  border-color: #fb1;
  background: white;
  box-shadow: 0 0 0 3px #fea;
}

label {
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
}


button {
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;
  min-width: 8rem;
}

button:hover,
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
}

button:disabled {
  opacity: 0.5rem;
  cursor: wait;
}
`;
