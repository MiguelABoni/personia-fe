import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const Ngramas = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Ngramas</title>
        <meta name='description' content='PersonIA - Ngramas' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          Ngramas
        </Typography>
      </SectionLayout>
    </>
  );
};
