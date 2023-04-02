import UI from '../../data/UI';
import getPageState from '../../../features/getPageState';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className={`nav__item nav__item_${getPageState(UI.mainPageName)}`}>
          <NavLink to="/">{UI.mainPageName}</NavLink>
        </li>
        <li className={`nav__item nav__item_${getPageState(UI.aboutPageName)}`}>
          <NavLink to="/about">{UI.aboutPageName}</NavLink>
        </li>
        <li className={`nav__item nav__item_${getPageState(UI.pageFormsName)}`}>
          <NavLink to="/forms">{UI.pageFormsName}</NavLink>
        </li>
      </ul>
    </nav>
  );
}
