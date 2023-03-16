import React from 'react';

import { Container } from '@mui/material';

import { FormProvider } from 'globals/contexts/Form/FormProvider';
import * as Organisms from 'organisms';

import styles from './styles';

export const Banner = () => {
  return (
    <FormProvider>
      <Container sx={styles.container}>
        <Organisms.Form />
        <Organisms.DisplayData />
      </Container>
    </FormProvider>
  );
};
