import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="container">
      <Link to="/">Home</Link>
      <Link to="/login">Login | Criar</Link>
    </nav>
  </header>
);

export default Header;
