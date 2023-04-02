import React, { FunctionComponent } from 'react';
import { ERROR_MESSAGES } from '../../data/constants';
import { UseFormRegister } from 'react-hook-form';
import { InputFormData } from 'shared/data/types';

interface InputRadioProps {
  register: UseFormRegister<InputFormData>;
  required?: boolean;
  errorMessage: string | undefined;
}

const InputRadio: FunctionComponent<InputRadioProps> = ({ register, required, errorMessage }) => {
  const registerOptions = required ? { required: ERROR_MESSAGES.radioError } : {};

  return (
    <div className="form__item">
      <p className="form__label">Brand</p>
      <div className="form__item_row form__item_brand">
        <label className="form__item_row">
          Belita
          <input
            className="InputRadio"
            type="radio"
            {...register('brand', registerOptions)}
            value="Belita"
          />
        </label>
        <label className="form__item_row">
          Vitex
          <input
            className="InputRadio"
            type="radio"
            {...register('brand', registerOptions)}
            value="Vitex"
          />
        </label>
      </div>
      {errorMessage && <p>{ERROR_MESSAGES.radioError}</p>}
    </div>
  );
};

export default InputRadio;
