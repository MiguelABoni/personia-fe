import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const AcercaDe = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Acerca De</title>
        <meta name='description' content='PersonIA - Acerca De' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Acerca De
      </Typography>
    </Box>
  );
};
