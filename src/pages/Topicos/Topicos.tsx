import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Topicos = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Topicos</title>
        <meta name='description' content='PersonIA - Topicos' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Topicos
        </Typography>
      </SectionLayout>
    </>
  );
};
