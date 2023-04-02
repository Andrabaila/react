import getCurrentPageName from '../../features/getCurrentPageName';
import React from 'react';
import Nav from '../../shared/ui/nav';
import './styles.scss';

export default function Header() {
  const currentPageName = getCurrentPageName();
  return (
    <header className="header">
      <h1 className="header__title">{currentPageName}</h1>
      <Nav />
    </header>
  );
}
