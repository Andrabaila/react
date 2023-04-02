import { ERROR_MESSAGES } from '../../data/constants';
import React, { FunctionComponent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { InputFormData } from 'shared/data/types';

interface InputDateProps {
  register: UseFormRegister<InputFormData>;
  errorMessage: string | undefined;
}

const InputDate: FunctionComponent<InputDateProps> = ({ register, errorMessage }) => {
  return (
    <div className="form__item">
      <label className="form__label" htmlFor="date">
        Date
      </label>
      <input
        className="InputDate"
        type="date"
        {...register('date', {
          required: ERROR_MESSAGES.dateError,
          validate: (value) => new Date(value) < new Date() || ERROR_MESSAGES.dateError,
        })}
      />
      {errorMessage && <p>{ERROR_MESSAGES.dateError}</p>}
    </div>
  );
};

export default InputDate;
