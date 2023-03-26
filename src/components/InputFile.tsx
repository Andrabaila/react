import React from 'react';

export default class InputFile extends React.Component<{
  fileRef: React.RefObject<HTMLInputElement>;
}> {
  render() {
    return <input className="InputFile" type="file" ref={this.props.fileRef} />;
  }
}
