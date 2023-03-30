import { ERROR_MESSAGES } from '../../data/constants';
import React from 'react';

export default class InputRadio extends React.Component<{
  belitaRef: React.RefObject<HTMLInputElement>;
  vitexRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}> {
  render() {
    return (
      <div className="form__item">
        <p className="form__label">Brand</p>
        <div className="form__item_row form__item_brand">
          <label className="form__item_row">
            Belita
            <input className="InputRadio" name="radio" type="radio" ref={this.props.belitaRef} />
          </label>
          <label className="form__item_row">
            Vitex
            <input className="InputRadio" name="radio" type="radio" ref={this.props.vitexRef} />
          </label>
        </div>
        {this.props.errorMessage && <p>{ERROR_MESSAGES.radioError}</p>}
      </div>
    );
  }
}
