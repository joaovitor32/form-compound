import { Box, Typography } from '@mui/material';

import * as Atoms from 'atoms';

import styles from './styles';

interface CardProps {
  title: string;
  value: string;
}

const Card = ({ title, value }: CardProps) => {
  return (
    <Box sx={styles.card}>
      <Atoms.Title title={title} />
      <Atoms.Value value={value} />
    </Box>
  );
};

export { Card };
