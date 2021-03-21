import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useMedia from '../../Hooks/useMedia';

import { Container, UserHeaderNav, Mobile } from './styles';
import { ReactComponent as FeedIcon } from '../../Assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../Assets/estatisticas.svg';
import { ReactComponent as PostIcon } from '../../Assets/adicionar.svg';
import { ReactComponent as ExitIcon } from '../../Assets/sair.svg';

import { UserContext } from '../../UserContext';

export default function UserHeader() {
  const { userLogout } = React.useContext(UserContext);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const mobile = useMedia('(max-width: 40rem)');
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    window.matchMedia('max-width: 40rem');
  }, []);

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
      {mobile && (
        <Mobile
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          className={mobileMenu && 'activeMobile'}
        />
      )}
      <UserHeaderNav className={mobile && 'navMobile'}>
        <NavLink
          to="/account"
          end
          activeClassName="active"
        >
          <FeedIcon />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink
          to="/account/stats"
          activeClassName="active"
        >
          <StatsIcon />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink
          to="/account/post"
          activeClassName="active"
        >
          <PostIcon />
          {mobile && 'Postar Foto'}
        </NavLink>
        <button
          type="button"
          className="buttonExit"
          onClick={userLogout}
        >
          <ExitIcon />
          {mobile && 'Sair'}
        </button>
      </UserHeaderNav>
    </Container>

  );
}
