import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Municipios = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Municipios</title>
        <meta name='description' content='PersonIA - Municipios' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Municipios
      </Typography>
    </Box>
  );
};
