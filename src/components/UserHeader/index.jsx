import React from 'react';
import { useLocation } from 'react-router-dom';

import { Container } from './styles';
import UserHeaderNav from '../UserHeaderNav';

export default function UserHeader() {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/account/post':
        setTitle('Poste sua foto');
        break;
      case '/account/stats':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha Conta');
    }
  }, [location]);
  return (
    <Container>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Container>

  );
}
