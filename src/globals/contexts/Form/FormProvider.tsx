import { ReactNode, useCallback, useState } from 'react';

import { inputs } from 'project-constants';

import { useForm } from 'react-hook-form';

import FormContext from './FormContext';
import { getValue } from '@mui/system';

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider = ({ children }: FormProviderProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm({});

  const findInputData = useCallback((id: number) => {
    return inputs.find((input) => input.id === id);
  }, []);

  const onSubmit = async (data: any) => {
    setIsSubmitted(!isSubmitted);
  };

  return (
    <FormContext.Provider
      value={{
        form,
        onSubmit,
        isSubmitted,
        findInputData,
        register: form.register,
        getValues: form.getValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
