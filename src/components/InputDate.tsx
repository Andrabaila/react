import { ERROR_MESSAGES } from 'data/constants';
import React from 'react';

export default class InputDate extends React.Component<{
  dateRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}> {
  render() {
    return (
      <div>
        <label htmlFor="date">Date</label>
        <input className="InputDate" type="date" name="date" ref={this.props.dateRef} />
        {this.props.errorMessage && <p>{ERROR_MESSAGES.dateError}</p>}
      </div>
    );
  }
}
