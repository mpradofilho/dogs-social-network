import styled from 'styled-components';
import bgImage from '../../Assets/login.jpg';

export const FormLogin = styled.section`
form {
  margin-bottom: 2rem;
}

.lostPassword {
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;
}

.lostPassword::after {
  content: '';
  height: 2px;
  width: 100%;
  background: currentColor;
  display: block;
}

.createAccount {
  margin-top: 4rem;
}

.createAccount p {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.subtitle {
  font-family: var(--type-second);
  line-height: 1;
  font-size: 2rem;
}

.subtitle::after {
  content: '';
  display: block;
  background: #ddd;
  height: 0.5rem;
  width: 3rem;
  border-radius: 0.2rem;
}

.button {
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

.button:hover,
.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
}

.button:disabled {
  opacity: 0.5rem;
  cursor: wait;
}
`;

export const LoginStyle = styled.section`

display: grid;
grid-template-columns: 1fr 1fr;
min-height: 100vh;
gap: 2rem;

::before {
  display: block;
  content: '';
  background: url(${bgImage}) no-repeat center center;
  background-size: cover;
}

div {
  max-width: 30rem;
  padding: 1rem;
}


@media (max-width: 40rem) {
  grid-template-columns: 1fr;
  
  ::before {
    display: none;
  }
  div {
    max-width: 100%;
  }
}
`;
