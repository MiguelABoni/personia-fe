import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Eventos = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Eventos</title>
        <meta name='description' content='PersonIA - Eventos' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Eventos
        </Typography>
      </SectionLayout>
    </>
  );
};
