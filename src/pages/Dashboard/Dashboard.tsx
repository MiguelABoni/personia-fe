import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Typography } from '@mui/material';

export const DashBoard = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - DashBoard</title>
        <meta name='description' content='PersonIA - DashBoard' />
      </Helmet>
      <SectionLayout>
        <Typography variant='h1' color='secondary'>
          DashBoard
        </Typography>
      </SectionLayout>
    </>
  );
};
