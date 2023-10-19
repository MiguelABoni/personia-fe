import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Municipios = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Municipios</title>
        <meta name='description' content='PersonIA - Municipios' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Municipios
        </Typography>
      </SectionLayout>
    </>
  );
};
