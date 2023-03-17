import getSearchInputValue from 'features/getSearchInputValue';
import setSearchInputValue from 'features/setSearchInputValue';
import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    searchInputValue: getSearchInputValue(),
  };
  componentDidMount() {
    this.setState({ searchInputValue: getSearchInputValue() });
    window.addEventListener('beforeunload', () => setSearchInputValue(this.state.searchInputValue));
  }
  componentWillUnmount() {
    localStorage.setItem('searchInputValue', this.state.searchInputValue);
  }
  render() {
    return (
      <form className="Search-bar">
        <input
          type="search"
          value={this.state.searchInputValue}
          onChange={(event) => this.setState({ searchInputValue: event.target.value })}
        />
      </form>
    );
  }
}
