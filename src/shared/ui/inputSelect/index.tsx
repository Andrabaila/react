import React from 'react';
import { ERROR_MESSAGES } from '../../data/constants';

interface InputSelectProps {
  selectRef: React.RefObject<HTMLSelectElement>;
  errorMessage: string;
}

const InputSelect: React.FC<InputSelectProps> = ({ selectRef, errorMessage }) => {
  return (
    <div className="form__item">
      <label className="form__label" htmlFor="select">
        Category
      </label>
      <select className="InputSelect" name="select" ref={selectRef}>
        <option value=""></option>
        <option value="Shower gels">Shower gels</option>
        <option value="Shampoos">Shampoos</option>
      </select>
      {errorMessage && <p>{ERROR_MESSAGES.selectError}</p>}
    </div>
  );
};

export default InputSelect;
