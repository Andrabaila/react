import React from 'react';

export default class InputCheckbox extends React.Component<{
  checkboxRef: React.RefObject<HTMLInputElement>;
}> {
  render() {
    return (
      <div>
        <label htmlFor="checkbox">Checkbox</label>
        <input
          className="InputCheckbox"
          type="checkbox"
          name="checkbox"
          ref={this.props.checkboxRef}
        />
        <p>error!</p>
      </div>
    );
  }
}
