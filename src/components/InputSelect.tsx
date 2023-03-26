import React from 'react';

export default class InputSelect extends React.Component<{
  selectRef: React.RefObject<HTMLSelectElement>;
}> {
  render() {
    return (
      <div>
        <label htmlFor="select">Category</label>
        <select className="InputSelect" name="select" ref={this.props.selectRef}>
          <option value=""></option>
          <option value="Shower gels">Shower gels</option>
          <option value="Shampoos">Shampoos</option>
        </select>
        <p>error!</p>
      </div>
    );
  }
}
