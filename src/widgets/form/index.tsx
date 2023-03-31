import { ERROR_MESSAGES, REFS } from '../../shared/data/constants';
import { FormCardObj } from '../../shared/data/types';
import { validateInput } from '../../features/validateInput/validateInput';
import React, { FormEvent, useRef, useState } from 'react';
import ButtonSubmit from '../../shared/ui/buttonSubmit';
import InputCheckbox from '../../shared/ui/inputCheckbox';
import InputDate from '../../shared/ui/inputDate';
import InputFile from '../../shared/ui/inputFile';
import InputRadio from '../../shared/ui/inputRadio';
import InputSelect from '../../shared/ui/inputSelect';
import InputText from '../../shared/ui/inputText';
import './styles.scss';

interface FormProps {
  addCard: (card: FormCardObj) => void;
}

const Form: React.FC<FormProps> = ({ addCard }) => {
  const [titleError, setTitleError] = useState('');
  const [dateError, setDateError] = useState('');
  const [selectError, setSelectError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');
  const [radioError, setRadioError] = useState('');
  const [fileError, setFileError] = useState('');

  const titleInputTextRef = useRef<HTMLInputElement>(null);
  const inputDateRef = useRef<HTMLInputElement>(null);
  const categoryInputSelectRef = useRef<HTMLSelectElement>(null);
  const stockInputCheckboxRef = useRef<HTMLInputElement>(null);
  const belitaInputRadioRef = useRef<HTMLInputElement>(null);
  const vitexInputRadioRef = useRef<HTMLInputElement>(null);
  const thumbnailInputFileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const titleValue = titleInputTextRef.current?.value;
    const titleName = titleInputTextRef.current?.name;
    const dateValue = inputDateRef.current?.value;
    const selectValue = categoryInputSelectRef.current?.value;
    const checkboxValue = stockInputCheckboxRef.current?.checked;
    const belitaRadioValue = belitaInputRadioRef.current?.checked;
    const vitexRadioValue = vitexInputRadioRef.current?.checked;
    const fileValue = thumbnailInputFileRef.current?.files?.[0];

    if (!validateInput(titleValue, titleName)) {
      setTitleError(ERROR_MESSAGES.titleError);
      return;
    } else {
      setTitleError('');
    }

    if (!dateValue || !(new Date(dateValue) < new Date())) {
      setDateError(ERROR_MESSAGES.dateError);
      return;
    } else {
      setDateError('');
    }

    if (selectValue === '') {
      setSelectError(ERROR_MESSAGES.selectError);
      return;
    } else {
      setSelectError('');
    }

    if (!checkboxValue) {
      setCheckboxError(ERROR_MESSAGES.checkboxError);
      return;
    } else {
      setCheckboxError('');
    }

    if (!belitaRadioValue && !vitexRadioValue) {
      setRadioError(ERROR_MESSAGES.radioError);
      return;
    } else {
      setRadioError('');
    }

    if (!fileValue) {
      setFileError(ERROR_MESSAGES.fileError);
      return;
    } else {
      setFileError('');
    }
    const card = {
      title: titleValue!,
      date: dateValue!,
      checkbox: selectValue ? 'Yes' : 'No',
      category: selectValue!,
      brand: belitaRadioValue ? 'BELITA' : 'VITEX',
      thumbnail: fileValue,
    };
    addCard(card);
    REFS.userForm.current?.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit} ref={REFS.userForm}>
      <InputText titleRef={titleInputTextRef} errorMessage={titleError} />
      <InputDate dateRef={inputDateRef} errorMessage={dateError} />
      <InputSelect selectRef={categoryInputSelectRef} errorMessage={selectError} />
      <InputCheckbox checkboxRef={stockInputCheckboxRef} errorMessage={checkboxError} />
      <InputRadio
        belitaRef={belitaInputRadioRef}
        vitexRef={vitexInputRadioRef}
        errorMessage={radioError}
      />
      <InputFile fileRef={thumbnailInputFileRef} errorMessage={fileError} />
      <ButtonSubmit />
    </form>
  );
};

export default Form;
