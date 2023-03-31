import { ERROR_MESSAGES } from '../../data/constants';
import React, { RefObject } from 'react';

interface InputFileProps {
  fileRef: RefObject<HTMLInputElement>;
  errorMessage: string;
}

const InputFile: React.FC<InputFileProps> = ({ fileRef, errorMessage }) => {
  return (
    <div className="form__item">
      <label className="form__label" htmlFor="file">
        Image
      </label>
      <input
        className="InputFile"
        ref={fileRef}
        type="file"
        name="file"
        accept="image/png, image/jpeg"
      />
      {errorMessage && <p>{ERROR_MESSAGES.fileError}</p>}
    </div>
  );
};

export default InputFile;
