import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Temas = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Temas</title>
        <meta name='description' content='PersonIA - Temas' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Temas
        </Typography>
      </SectionLayout>
    </>
  );
};
