import { useContext } from 'react';
import { TextField } from '@mui/material';

import FormContext from 'globals/contexts/Form/FormContext';
import styles from './styles';

interface InputProps {
  id: number;
}

const Input = ({ id }: InputProps) => {
  const { findInputData, register } = useContext(FormContext);

  const inputData = findInputData(id);

  return !!inputData?.name ? (
    <TextField
      variant="standard"
      sx={styles.input}
      placeholder={inputData?.placeholder}
      InputProps={{ disableUnderline: true }}
      type={inputData.type ?? 'text'}
      {...register(inputData.name)}
    />
  ) : null;
};

export { Input };
