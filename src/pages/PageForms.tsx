import Header from '../components/Header';
import React from 'react';
import Form from 'components/Form';

export default class PageForms extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="Forms">
          <h2>This is Forms page</h2>
          <Form />
        </main>
      </>
    );
  }
}
