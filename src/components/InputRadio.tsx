import React from 'react';

export default class InputRadio extends React.Component<{
  belitaRef: React.RefObject<HTMLInputElement>;
  vitexRef: React.RefObject<HTMLInputElement>;
}> {
  render() {
    return (
      <div>
        <p>Brand</p>
        <label>
          Belita
          <input className="InputRadio" name="radio" type="radio" ref={this.props.belitaRef} />
        </label>
        <label>
          Vitex
          <input className="InputRadio" name="radio" type="radio" ref={this.props.vitexRef} />
        </label>
        <p>error!</p>
      </div>
    );
  }
}
