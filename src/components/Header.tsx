import getCurrentPageName from 'features/getCurrentPageName';
import React from 'react';
import Nav from './Nav';

export default class Header extends React.Component {
  render() {
    const currentPageName = getCurrentPageName();
    return (
      <header className="header">
        <h1 className="header__title">{currentPageName}</h1>
        <Nav />
      </header>
    );
  }
}
