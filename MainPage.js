
import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Harta
      </a>

      <a className="menu-item" href="/laravel">
        Drumuri sub constructie
      </a>

      <a className="menu-item" href="/angular">
        Despre noi
      </a>

      <a className="menu-item" href="/react">
        Contact
      </a>
    </Menu>
  );
};
