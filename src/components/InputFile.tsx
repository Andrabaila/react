import { ERROR_MESSAGES } from '../data/constants';
import React from 'react';

export default class InputFile extends React.Component<{
  fileRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}> {
  render() {
    return (
      <div className="form__item">
        <label className="form__label" htmlFor="file">
          Image
        </label>
        <input
          className="InputFile"
          ref={this.props.fileRef}
          type="file"
          name="file"
          accept="image/png, image/jpeg"
        />
        {this.props.errorMessage && <p>{ERROR_MESSAGES.fileError}</p>}
      </div>
    );
  }
}
