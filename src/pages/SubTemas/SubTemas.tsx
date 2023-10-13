import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const SubTemas = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - SubTemas</title>
        <meta name='description' content='PersonIA - SubTemas' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        SubTemas
      </Typography>
    </Box>
  );
};
