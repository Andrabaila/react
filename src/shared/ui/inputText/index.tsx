import React from 'react';
import { ERROR_MESSAGES } from '../../data/constants';

interface InputTextProps {
  titleRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}

const InputText: React.FC<InputTextProps> = ({ titleRef, errorMessage }) => {
  return (
    <div className="form__item">
      <label className="form__label" htmlFor="title">
        Title
      </label>
      <input className="InputText" ref={titleRef} name="title" type="text" />
      {errorMessage && <p>{ERROR_MESSAGES.titleError}</p>}
    </div>
  );
};

export default InputText;
