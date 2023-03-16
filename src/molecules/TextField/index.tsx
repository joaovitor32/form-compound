import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import FormContext from 'globals/contexts/Form/FormContext';

import * as Atoms from 'atoms';

import styles from './styles';

interface TextFieldProps {
  id: number;
  key: any;
}

const TextField = ({ id }: TextFieldProps) => {
  const { findInputData } = useContext(FormContext);

  const inputData = findInputData(id);

  return (
    <Box sx={styles.inputContainer}>
      <Atoms.Input id={id} />
      <Typography>{inputData?.label}</Typography>
    </Box>
  );
};

export { TextField };
