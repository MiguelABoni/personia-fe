import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const Ngramas = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - Ngramas</title>
        <meta name='description' content='PersonIA - Ngramas' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        Ngramas
      </Typography>
    </Box>
  );
};
