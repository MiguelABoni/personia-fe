import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const WordCloud = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - WordCloud</title>
        <meta name='description' content='PersonIA - WordCloud' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          WordCloud
        </Typography>
      </SectionLayout>
    </>
  );
};
