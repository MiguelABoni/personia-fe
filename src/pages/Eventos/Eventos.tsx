import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Eventos = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Eventos</title>
        <meta name='description' content='PersonIA - Eventos' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Eventos
      </Typography>
    </Box>
  );
};
