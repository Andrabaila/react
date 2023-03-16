import UI from 'data/UI';
import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="/">{UI.mainPageName}</a>
          </li>
          <li>
            <a href="/about">{UI.aboutPageName}</a>
          </li>
        </ul>
      </nav>
    );
  }
}
