export type CardObj = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type FormRefs = {
  userForm: React.RefObject<HTMLFormElement>;
  titleInputText: React.RefObject<HTMLInputElement>;
  inputDate: React.RefObject<HTMLInputElement>;
  categoryInputSelect: React.RefObject<HTMLSelectElement>;
  stockInputCheckbox: React.RefObject<HTMLInputElement>;
  belitaInputRadio: React.RefObject<HTMLInputElement>;
  vitexInputRadio: React.RefObject<HTMLInputElement>;
  thumbnailInputFile: React.RefObject<HTMLInputElement>;
};

export interface RegularExpressions {
  [index: string]: RegExp;
}

export type FormCardObj = {
  title: string;
  date: string;
  checkbox: string;
  category: string;
  brand: string;
  thumbnail: File;
};
