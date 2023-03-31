import { ERROR_MESSAGES } from '../../data/constants';
import React from 'react';

interface InputCheckboxProps {
  checkboxRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({ checkboxRef, errorMessage }) => {
  return (
    <div className="form__item">
      <label className="form__label" htmlFor="checkbox">
        In stock
      </label>
      <input className="InputCheckbox" type="checkbox" name="checkbox" ref={checkboxRef} />
      {errorMessage && <p>{ERROR_MESSAGES.checkboxError}</p>}
    </div>
  );
};

export default InputCheckbox;
