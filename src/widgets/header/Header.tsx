import getCurrentPageName from '../../features/getCurrentPageName/getCurrentPageName';
import React from 'react';
import Nav from '../../shared/ui/nav/Nav';
import './styles.scss';

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
