import SearchBar from 'components/SearchBar';
import React from 'react';

export default class PageMain extends React.Component {
  render() {
    return (
      <main className="Main__about">
        <div>
          <SearchBar />
        </div>
      </main>
    );
  }
}
