import React from 'react';
import { ERROR_MESSAGES } from '../../data/constants';
import { Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import { InputFormData } from 'shared/data/types';

interface InputSelectProps {
  register: UseFormRegister<InputFormData>;
  name: Path<{ category: string }>;
  required?: boolean;
  errorMessage: string | undefined;
}

const InputSelect: React.FC<InputSelectProps> = ({ register, name, required, errorMessage }) => {
  const registerOptions: RegisterOptions = required ? { required: ERROR_MESSAGES.selectError } : {};

  return (
    <div className="form__item">
      <label className="form__label" htmlFor={name}>
        Category
      </label>
      <select className="InputSelect" {...register(name, registerOptions)} name={name}>
        <option value=""></option>
        <option value="Shower gels">Shower gels</option>
        <option value="Shampoos">Shampoos</option>
      </select>
      {errorMessage && <p>{ERROR_MESSAGES.selectError}</p>}
    </div>
  );
};

export default InputSelect;
