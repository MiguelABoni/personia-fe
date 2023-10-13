import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Temas = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Temas</title>
        <meta name='description' content='PersonIA - Temas' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Temas
      </Typography>
    </Box>
  );
};
