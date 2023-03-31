import { ERROR_MESSAGES } from '../../data/constants';
import React, { FunctionComponent } from 'react';

interface InputRadioProps {
  belitaRef: React.RefObject<HTMLInputElement>;
  vitexRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}

const InputRadio: FunctionComponent<InputRadioProps> = ({ belitaRef, vitexRef, errorMessage }) => {
  return (
    <div className="form__item">
      <p className="form__label">Brand</p>
      <div className="form__item_row form__item_brand">
        <label className="form__item_row">
          Belita
          <input className="InputRadio" name="radio" type="radio" ref={belitaRef} />
        </label>
        <label className="form__item_row">
          Vitex
          <input className="InputRadio" name="radio" type="radio" ref={vitexRef} />
        </label>
      </div>
      {errorMessage && <p>{ERROR_MESSAGES.radioError}</p>}
    </div>
  );
};

export default InputRadio;
