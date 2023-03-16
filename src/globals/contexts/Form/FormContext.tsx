import { UseFormRegister, FieldValues, UseFormReturn, UseFormGetValues } from 'react-hook-form';
import { createContext } from 'react';

interface Input {
  id: number;
  name: string;
  label: string;
  placeholder: string;
  type: string;
}

interface FormContextProps {
  register: UseFormRegister<FieldValues>;
  findInputData: (data: number) => Input | undefined;
  onSubmit: (data: any) => void;
  form: UseFormReturn<FieldValues, any>;
  isSubmitted: boolean;
  getValues: UseFormGetValues<FieldValues>;
}

const FormContext = createContext<FormContextProps>({} as FormContextProps);

export default FormContext;
