import { ERROR_MESSAGES } from '../../data/constants';
import React, { FunctionComponent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { InputFormData } from 'shared/data/types';

interface InputCheckboxProps {
  register: UseFormRegister<InputFormData>;
  errorMessage: string | undefined;
}

const InputCheckbox: FunctionComponent<InputCheckboxProps> = ({ register, errorMessage }) => {
  return (
    <div className="form__item">
      <label className="form__label" htmlFor="checkbox">
        In stock
      </label>
      <input
        className="InputCheckbox"
        type="checkbox"
        {...register('checkbox', { required: ERROR_MESSAGES.checkboxError })}
        name="checkbox"
      />
      {errorMessage && <p>{ERROR_MESSAGES.checkboxError}</p>}
    </div>
  );
};

export default InputCheckbox;
