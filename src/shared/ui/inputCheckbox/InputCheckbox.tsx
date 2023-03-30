import { ERROR_MESSAGES } from '../../data/constants';
import React from 'react';

export default class InputCheckbox extends React.Component<{
  checkboxRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}> {
  render() {
    return (
      <div className="form__item">
        <label className="form__label" htmlFor="checkbox">
          In stock
        </label>
        <input
          className="InputCheckbox"
          type="checkbox"
          name="checkbox"
          ref={this.props.checkboxRef}
        />
        {this.props.errorMessage && <p>{ERROR_MESSAGES.checkboxError}</p>}
      </div>
    );
  }
}
