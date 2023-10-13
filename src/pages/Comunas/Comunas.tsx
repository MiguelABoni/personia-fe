import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Comunas = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Comunas</title>
        <meta name='description' content='PersonIA - Comunas' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Comunas
      </Typography>
    </Box>
  );
};
