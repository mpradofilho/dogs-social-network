import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import { Error } from '../Helper/styles';
import { FormLogin } from './styles';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (

    <FormLogin className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="username" child="Erro" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        {error && <Error>{error}</Error>}
      </form>
      <Link to="/login/lostPassword" className="lostPassword">Esqueci minha senha</Link>
      <div className="createAccount">
        <h2 className="subtitle">Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se!</p>
        <Link className="button" to="/login/create">Cadastro</Link>
      </div>
    </FormLogin>

  );
};

export default LoginForm;
