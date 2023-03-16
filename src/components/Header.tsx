import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">This is header with PageName</h1>
        <nav className="header__nav">
          <ul>
            <li>Main page</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    );
  }
}
