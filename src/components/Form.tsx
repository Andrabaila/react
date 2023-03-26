import { ERROR_MESSAGES, REFS } from '../data/constants';
import { FormCardObj } from '../data/types';
import { validateInput } from '../features/validateInput';
import React, { FormEvent } from 'react';
import ButtonSubmit from './ButtonSubmit';
import InputCheckbox from './InputCheckbox';
import InputDate from './InputDate';
import InputFile from './InputFile';
import InputRadio from './InputRadio';
import InputSelect from './InputSelect';
import InputText from './InputText';

export default class Form extends React.Component<{ addCard: (card: FormCardObj) => void }> {
  state = {
    titleError: '',
    dateError: '',
    selectError: '',
    checkboxError: '',
    radioError: '',
    fileError: '',
  };
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const titleValue = REFS.titleInputText.current?.value;
    const titleName = REFS.titleInputText.current?.name;
    const dateValue = REFS.inputDate.current?.value;
    //const dateName = REFS.inputDate.current?.name;
    //const selectValue = REFS.categoryInputSelect.current?.value;
    //const selectName = REFS.categoryInputSelect.current?.name;
    //const checkboxValue = REFS.stockInputCheckbox.current?.checked;
    //const checkboxName = REFS.stockInputCheckbox.current?.name;
    //const belitaRadioValue = REFS.belitaInputRadio.current?.checked;
    //const vitexRadioValue = REFS.vitexInputRadio.current?.checked;
    //const radioName = REFS.vitexInputRadio.current?.name;
    //const fileValue = REFS.thumbnailInputFile.current?.value;
    //const fileName = REFS.thumbnailInputFile.current?.name;

    if (!validateInput(titleValue, titleName)) {
      this.setState((prev) => ({
        ...prev,
        titleError: ERROR_MESSAGES.titleError,
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        titleError: '',
      }));
    }

    if (!dateValue || !(new Date(dateValue) < new Date())) {
      this.setState((prev) => ({
        ...prev,
        dateError: ERROR_MESSAGES.dateError,
      }));
    } else {
      this.setState((prev) => ({
        ...prev,
        titleError: '',
        dateError: '',
      }));
      const card = {
        title: titleValue!,
        date: dateValue!,
        checkbox: true,
        category: '',
        brand: '',
        thumbnail: '',
      };
      this.props.addCard(card);
      REFS.userForm.current?.reset();
    }
  };
  render() {
    return (
      <form className="Form" ref={REFS.userForm} onSubmit={this.handleSubmit}>
        <InputText titleRef={REFS.titleInputText} errorMessage={this.state.titleError} />
        <InputDate dateRef={REFS.inputDate} errorMessage={this.state.dateError} />
        <InputSelect selectRef={REFS.categoryInputSelect} />
        <InputCheckbox checkboxRef={REFS.stockInputCheckbox} />
        <InputRadio belitaRef={REFS.belitaInputRadio} vitexRef={REFS.vitexInputRadio} />
        <InputFile fileRef={REFS.thumbnailInputFile} />
        <ButtonSubmit />
      </form>
    );
  }
}
