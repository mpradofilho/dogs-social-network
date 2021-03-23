import { NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import useMedia from '../../Hooks/useMedia';

import { UserContext } from '../../UserContext';
import { Mobile, Nav } from './styles';

import { ReactComponent as FeedIcon } from '../../Assets/feed.svg';
import { ReactComponent as StatsIcon } from '../../Assets/estatisticas.svg';
import { ReactComponent as PostIcon } from '../../Assets/adicionar.svg';
import { ReactComponent as ExitIcon } from '../../Assets/sair.svg';

export default function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobile = useMedia('(max-width: 40rem)');

  return (
    <>
      {mobile && (
        <Mobile
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
          // activeClassName="activeMobile"
          // className={mobileMenu && 'activeMobile'}
          mobileActive={mobileMenu && true}
        />
      )}
      <Nav
        isMobile={mobile && true}
        mobileActive={mobileMenu && true}
      >
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
      </Nav>
    </>
  );
}
