import Header from '../../widgets/header';
import React from 'react';
import './styles.scss';

export default function PageNotFound() {
  return (
    <>
      <Header />
      <main className="main__404">
        <p>Sorry, there is no such page</p>
      </main>
    </>
  );
}
