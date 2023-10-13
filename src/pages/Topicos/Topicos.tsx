import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Topicos = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Topicos</title>
        <meta name='description' content='PersonIA - Topicos' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Topicos
      </Typography>
    </Box>
  );
};
