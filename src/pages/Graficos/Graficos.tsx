import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Graficos = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Graficos</title>
        <meta name='description' content='PersonIA - Graficos' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Graficos
      </Typography>
    </Box>
  );
};
