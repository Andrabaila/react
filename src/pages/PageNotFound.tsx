import Header from '../components/Header';
import React from 'react';

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
