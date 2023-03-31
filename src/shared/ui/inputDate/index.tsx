import { ERROR_MESSAGES } from '../../data/constants';
import React from 'react';

interface InputDateProps {
  dateRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}

const InputDate: React.FC<InputDateProps> = ({ dateRef, errorMessage }) => {
  return (
    <div className="form__item">
      <label className="form__label" htmlFor="date">
        Date
      </label>
      <input className="InputDate" type="date" name="date" ref={dateRef} />
      {errorMessage && <p>{ERROR_MESSAGES.dateError}</p>}
    </div>
  );
};

export default InputDate;
