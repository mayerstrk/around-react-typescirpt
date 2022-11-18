import React from 'react';
import logo from './Header__images/__logo.svg'

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt='"Around the U.S." logo'
        className="header__logo"
      />
    </header>
  );
};

export default Header;