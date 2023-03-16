import { Typography } from '@mui/material';

import styles from './styles';

interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return <Typography sx={styles.title}>{title}</Typography>;
};

export { Title };
