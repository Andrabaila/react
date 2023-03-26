import { ERROR_MESSAGES } from '../data/constants';
import React from 'react';

export default class InputText extends React.Component<{
  titleRef: React.RefObject<HTMLInputElement>;
  errorMessage: string;
}> {
  render() {
    return (
      <div>
        <label htmlFor="title">Title</label>
        <input className="InputText" ref={this.props.titleRef} name="title" type="text" />

        {this.props.errorMessage && <p>{ERROR_MESSAGES.titleError}</p>}
      </div>
    );
  }
}
