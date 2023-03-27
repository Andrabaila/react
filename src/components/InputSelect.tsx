import { ERROR_MESSAGES } from '../data/constants';
import React from 'react';

export default class InputSelect extends React.Component<{
  selectRef: React.RefObject<HTMLSelectElement>;
  errorMessage: string;
}> {
  render() {
    return (
      <div className="form__item">
        <label className="form__label" htmlFor="select">
          Category
        </label>
        <select className="InputSelect" name="select" ref={this.props.selectRef}>
          <option value=""></option>
          <option value="Shower gels">Shower gels</option>
          <option value="Shampoos">Shampoos</option>
        </select>
        {this.props.errorMessage && <p>{ERROR_MESSAGES.selectError}</p>}
      </div>
    );
  }
}
