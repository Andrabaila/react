import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICustomDataElement, IFormPageState, IFormValues } from './types';

const initialFormPageState: IFormPageState = {
  characters: [],
  name: '',
  status: false,
  species: '',
  gender: false,
  birthday: '',
  agreement: false,
  hasErrors: false,
  selectedCharacter: null,
};

const pageFormSlice = createSlice({
  name: 'formPage',
  initialState: initialFormPageState,
  reducers: {
    updateCustomCards(state, action: PayloadAction<ICustomDataElement>) {
      state.characters.unshift(action.payload);
    },
    updateFormValues(state, action: PayloadAction<Omit<IFormValues, 'avatar'>>) {
      state.name = action.payload.name;
      state.status = action.payload.status;
      state.species = action.payload.species;
      state.gender = action.payload.gender;
      state.birthday = action.payload.birthday;
      state.agreement = action.payload.agreement;
    },
    updateFormErrors(state, action: PayloadAction<boolean>) {
      state.hasErrors = action.payload;
    },
    updateSelectedCustomCard(state, action: PayloadAction<ICustomDataElement | null>) {
      state.selectedCharacter = action.payload;
    },
  },
});

export const pageFormReducer = pageFormSlice.reducer;
