import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import React from 'react';

export default class PageMain extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="Main">
          <div>
            <SearchBar />
          </div>
        </main>
      </>
    );
  }
}
