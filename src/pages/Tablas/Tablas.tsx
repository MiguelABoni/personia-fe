import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Tablas = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Tablas</title>
        <meta name='description' content='PersonIA - Tablas' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Tablas
      </Typography>
    </Box>
  );
};
