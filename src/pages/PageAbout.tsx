import Header from '../components/Header';
import React from 'react';

export default class PageAbout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="About">
          <h2>This is About Us page</h2>
        </main>
      </>
    );
  }
}
