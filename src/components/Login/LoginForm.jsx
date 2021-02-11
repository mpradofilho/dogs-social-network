import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      console.log(res);
      return res.json();
    }).then((res) => console.log(res));
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="username" />
        <button type="submit">Entrar</button>
      </form>
      <Link to="/login/create">Cadastro</Link>
    </section>

  );
};

export default LoginForm;
