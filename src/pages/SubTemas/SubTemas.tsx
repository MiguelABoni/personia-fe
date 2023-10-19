import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const SubTemas = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - SubTemas</title>
        <meta name='description' content='PersonIA - SubTemas' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          SubTemas
        </Typography>
      </SectionLayout>
    </>
  );
};
