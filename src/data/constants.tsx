import React from 'react';
import { FormRefs, RegularExpressions } from './types';

export const REFS: FormRefs = {
  userForm: React.createRef(),
  titleInputText: React.createRef(),
  inputDate: React.createRef(),
  categoryInputSelect: React.createRef(),
  stockInputCheckbox: React.createRef(),
  belitaInputRadio: React.createRef(),
  vitexInputRadio: React.createRef(),
  thumbnailInputFile: React.createRef(),
};

export const REGULAR_EXPRESSIONS: RegularExpressions = {
  title: /[a-zA-Z]{3,}/,
  phone: /^\+[0-9]{9}/,
  date: /^(0?[1-9]|1[012])\/(\d\d)$/,
};

export const ERROR_MESSAGES = {
  titleError: 'title required and must be at least three letters',
  dateError: 'date required and must be less than today',
  selectError: 'category required and must be selected',
  checkboxError: 'in stock required',
  radioError: 'brand required and must be selected',
  fileError: 'file required and must be image',
};
