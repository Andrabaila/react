import Header from '../../widgets/header/Header';
import React from 'react';
import './styles.scss';

export default class PageNotFound extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="main__404">
          <p>Sorry, there is no such page</p>
        </main>
      </>
    );
  }
}
