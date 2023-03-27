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
    const selectValue = REFS.categoryInputSelect.current?.value;
    const checkboxValue = REFS.stockInputCheckbox.current?.checked;
    const belitaRadioValue = REFS.belitaInputRadio.current?.checked;
    const vitexRadioValue = REFS.vitexInputRadio.current?.checked;
    const fileValue = REFS.thumbnailInputFile.current?.files?.[0];

    if (!validateInput(titleValue, titleName)) {
      this.setState((prev) => ({
        ...prev,
        titleError: ERROR_MESSAGES.titleError,
      }));
      return;
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
      return;
    } else {
      this.setState((prev) => ({
        ...prev,
        dateError: '',
      }));
    }

    if (selectValue === '') {
      this.setState((prev) => ({
        ...prev,
        selectError: ERROR_MESSAGES.selectError,
      }));
      return;
    } else {
      this.setState((prev) => ({
        ...prev,
        selectError: '',
      }));
    }

    if (!checkboxValue) {
      this.setState((prev) => ({
        ...prev,
        checkboxError: ERROR_MESSAGES.checkboxError,
      }));
      return;
    } else {
      this.setState((prev) => ({
        ...prev,
        checkboxError: '',
      }));
    }

    if (!belitaRadioValue && !vitexRadioValue) {
      this.setState((prev) => ({
        ...prev,
        radioError: ERROR_MESSAGES.radioError,
      }));
      return;
    } else {
      this.setState((prev) => ({
        ...prev,
        radioError: '',
      }));
    }

    if (!fileValue) {
      this.setState((prev) => ({
        ...prev,
        fileError: ERROR_MESSAGES.fileError,
      }));
      return;
    } else {
      this.setState((prev) => ({
        ...prev,
        fileError: '',
      }));
    }
    const card = {
      title: titleValue!,
      date: dateValue!,
      checkbox: selectValue ? 'Yes' : 'No',
      category: selectValue!,
      brand: belitaRadioValue ? 'BELITA' : 'VITEX',
      thumbnail: fileValue,
    };
    this.props.addCard(card);
    REFS.userForm.current?.reset();
  };

  render() {
    return (
      <form className="Form" ref={REFS.userForm} onSubmit={this.handleSubmit}>
        <InputText titleRef={REFS.titleInputText} errorMessage={this.state.titleError} />
        <InputDate dateRef={REFS.inputDate} errorMessage={this.state.dateError} />
        <InputSelect selectRef={REFS.categoryInputSelect} errorMessage={this.state.selectError} />
        <InputCheckbox
          checkboxRef={REFS.stockInputCheckbox}
          errorMessage={this.state.checkboxError}
        />
        <InputRadio
          belitaRef={REFS.belitaInputRadio}
          vitexRef={REFS.vitexInputRadio}
          errorMessage={this.state.radioError}
        />
        <InputFile fileRef={REFS.thumbnailInputFile} errorMessage={this.state.fileError} />
        <ButtonSubmit />
      </form>
    );
  }
}
