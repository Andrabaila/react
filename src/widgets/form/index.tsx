import { FormCardObj, InputFormData } from '../../shared/data/types';
import React from 'react';
import ButtonSubmit from '../../shared/ui/buttonSubmit';
import InputCheckbox from '../../shared/ui/inputCheckbox';
import InputDate from '../../shared/ui/inputDate';
import InputFile from '../../shared/ui/inputFile';
import InputRadio from '../../shared/ui/inputRadio';
import InputSelect from '../../shared/ui/inputSelect';
import InputText from '../../shared/ui/inputText';
import './styles.scss';
import { useForm } from 'react-hook-form';

interface FormProps {
  addCard: (card: FormCardObj) => void;
}

const Form: React.FC<FormProps> = ({ addCard }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputFormData>({
    reValidateMode: 'onSubmit',
    mode: 'onSubmit',
  });

  const onSubmit = (data: InputFormData) => {
    const card = {
      title: data.title,
      date: data.date,
      checkbox: data.checkbox ? 'Yes' : 'No',
      category: data.category,
      brand: data.brand,
      thumbnail: data.thumbnail[0],
    };
    addCard(card);
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputText register={register} required name="title" errorMessage={errors?.title?.message} />
      <InputDate register={register} errorMessage={errors?.date?.message} />
      <InputSelect
        register={register}
        required
        name="category"
        errorMessage={errors?.category?.message}
      />
      <InputCheckbox register={register} errorMessage={errors?.checkbox?.message} />
      <InputRadio register={register} required errorMessage={errors?.brand?.message} />
      <InputFile register={register} required errorMessage={errors?.thumbnail?.message} />
      <ButtonSubmit />
    </form>
  );
};

export default Form;
