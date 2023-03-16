import { useContext } from 'react';
import { Box } from '@mui/material';

import { inputs } from 'project-constants';

import { FormProvider } from 'react-hook-form';
import FormContext from 'globals/contexts/Form/FormContext';

import * as Atoms from 'atoms';
import * as Molecules from 'molecules';
import styles from './styles';

const Form = () => {
  const { onSubmit, form, isSubmitted } = useContext(FormContext);
  return (
    <FormProvider {...form}>
      <form style={styles.outerContainer} onSubmit={form.handleSubmit(onSubmit)}>
        <Box sx={styles.formContainer}>
          {inputs.map((input) => {
            return <Molecules.TextField key={input.id} id={input.id} />;
          })}
          <Atoms.Button type="submit" title={isSubmitted ? 'Não mostar' : 'Mostrar'} />
        </Box>
      </form>
    </FormProvider>
  );
};

export { Form };
