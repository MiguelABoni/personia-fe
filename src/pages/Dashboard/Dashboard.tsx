import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Stack, useMediaQuery } from '@mui/material';

export const DashBoard: FC = () => {
  const mediaMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      <Helmet>
        <title>PersonIA - DashBoard</title>
        <meta name='description' content='PersonIA - DashBoard' />
      </Helmet>
      <SectionLayout>
        <Stack
          sx={{
            width: '100%',
            height: mediaMobile ? 'calc(100vh - 252px)' : 'calc(100vh - 174px)',
          }}
        >
          <iframe
            title='Personeria_Medellin_V3'
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            src='https://app.powerbi.com/view?r=eyJrIjoiYWRlMDcyMDktNzgxNi00MWEzLWJmOTMtZDliNThiZGQ5NWQyIiwidCI6ImYwZGU1ZmEyLWU4MWYtNGJhMC1hNWFiLTJjNmI4ODkyOWM5NiJ9'
            allowFullScreen={true}
          ></iframe>
        </Stack>
      </SectionLayout>
    </>
  );
};
