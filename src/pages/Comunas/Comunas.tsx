import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Comunas = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Comunas</title>
        <meta name='description' content='PersonIA - Comunas' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Comunas
        </Typography>
      </SectionLayout>
    </>
  );
};
