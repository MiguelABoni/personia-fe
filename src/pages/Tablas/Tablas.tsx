import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Tablas = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Tablas</title>
        <meta name='description' content='PersonIA - Tablas' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Tablas
        </Typography>
      </SectionLayout>
    </>
  );
};
