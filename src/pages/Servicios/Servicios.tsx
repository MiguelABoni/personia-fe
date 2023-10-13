import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Servicios = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Servicios</title>
        <meta name='description' content='PersonIA - Servicios' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Servicios
      </Typography>
    </Box>
  );
};
