export interface IFormValues {
  name: string;
  status: boolean;
  species: string;
  gender: boolean;
  birthday: string;
  avatar: FileList | null;
  agreement: boolean;
}

export interface ICustomDataElement {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  birthDate: string;
  avatar: string;
}

export type CustomData = ICustomDataElement[];

export interface IFormPageState extends Omit<IFormValues, 'avatar'> {
  characters: CustomData;
  hasErrors: boolean;
  selectedCharacter: ICustomDataElement | null;
}
