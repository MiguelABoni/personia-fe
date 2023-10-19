import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Servicios = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Servicios</title>
        <meta name='description' content='PersonIA - Servicios' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Servicios
        </Typography>
      </SectionLayout>
    </>
  );
};
