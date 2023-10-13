import { Helmet } from 'react-helmet';
import { Box, Typography } from '@mui/material';

export const WordCloud = () => {
  return (
    <Box>
      <Helmet>
        <title>PersonIA - WordCloud</title>
        <meta name='description' content='PersonIA - WordCloud' />
      </Helmet>
      <Typography variant='h1' color='primary'>
        WordCloud
      </Typography>
    </Box>
  );
};
