import React from 'react';
import ButtonSubmit from './ButtonSubmit';
import InputCheckbox from './InputCheckbox';
import InputDate from './InputDate';
import InputFile from './InputFile';
import InputRadio from './InputRadio';
import InputSelect from './InputSelect';
import InputText from './InputText';

export default class Form extends React.Component {
  render() {
    return (
      <form className="Form">
        <InputText />
        <InputDate />
        <InputSelect />
        <InputCheckbox />
        <InputRadio />
        <InputFile />
        <ButtonSubmit />
      </form>
    );
  }
}
