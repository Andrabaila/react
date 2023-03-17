import UI from 'data/UI';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/">{UI.mainPageName}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{UI.aboutPageName}</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
