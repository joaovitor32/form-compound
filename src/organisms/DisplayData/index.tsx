import { useContext } from 'react';

import FormContext from 'globals/contexts/Form/FormContext';
import React from 'react';

import { Box } from '@mui/material';

import styles from './styles';

import * as Molecules from 'molecules';

export const DisplayData = () => {
  const { isSubmitted, getValues } = useContext(FormContext);
  return (
    <Box sx={styles.container}>
      {isSubmitted
        ? Object.entries(getValues()).map((elem: Array<string>) => {
            const title = elem[0].charAt(0).toUpperCase() + elem[0].slice(1);
            return <Molecules.Card title={title} value={elem[1]} />;
          })
        : null}
    </Box>
  );
};
