import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Graficos = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Graficos</title>
        <meta name='description' content='PersonIA - Graficos' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Graficos
        </Typography>
      </SectionLayout>
    </>
  );
};
