import React from 'react';
import { ERROR_MESSAGES } from '../../data/constants';
import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { InputFormData } from 'shared/data/types';
import { validateInput } from '../../../features/validateInput';

interface InputTextProps {
  register: UseFormRegister<InputFormData>;
  name: Path<{ title: string }>;
  required?: boolean;
  errorMessage: string | undefined;
}

const InputText: React.FC<InputTextProps> = ({ register, name, required, errorMessage }) => {
  const registerOptions: RegisterOptions = required
    ? {
        required: ERROR_MESSAGES.titleError,
        validate: (value) => validateInput(value, name) || ERROR_MESSAGES.titleError,
      }
    : {};

  return (
    <div className="form__item">
      <label className="form__label" htmlFor={name}>
        Title
      </label>
      <input className="InputText" {...register(name, registerOptions)} name={name} type="text" />
      {errorMessage && <p>{ERROR_MESSAGES.titleError}</p>}
    </div>
  );
};

export default InputText;
