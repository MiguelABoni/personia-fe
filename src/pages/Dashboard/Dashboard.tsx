import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const DashBoard = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - DashBoard</title>
        <meta name='description' content='PersonIA - DashBoard' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        DashBoard
      </Typography>
    </Box>
  );
};
