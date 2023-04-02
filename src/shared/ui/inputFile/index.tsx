import { ERROR_MESSAGES } from '../../data/constants';
import React, { FunctionComponent } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { InputFormData } from 'shared/data/types';

interface InputFileProps {
  register: UseFormRegister<InputFormData>;
  required?: boolean;
  errorMessage: string | undefined;
}

const InputFile: FunctionComponent<InputFileProps> = ({ register, required, errorMessage }) => {
  const registerOptions = required ? { required: ERROR_MESSAGES.fileError } : {};

  return (
    <div className="form__item">
      <label className="form__label" htmlFor="file">
        Image
      </label>
      <input
        className="InputFile"
        type="file"
        accept="image/png, image/jpeg"
        {...register('thumbnail', registerOptions)}
        name="thumbnail"
      />
      {errorMessage && <p>{ERROR_MESSAGES.fileError}</p>}
    </div>
  );
};

export default InputFile;
