import { Typography } from '@mui/material';

import styles from './styles';

interface ValueProps {
  value: string;
}

const Value = ({ value }: ValueProps) => {
  return <Typography sx={styles.value}>{value}</Typography>;
};

export { Value };
