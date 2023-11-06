import { CONTENT } from '../../constants/content';
import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Stack, Typography, useMediaQuery } from '@mui/material';

export const DashBoard: FC = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Helmet>
        <title>PersonIA - DashBoard</title>
        <meta name='description' content='PersonIA - DashBoard' />
      </Helmet>
      <SectionLayout>
        <Stack
          flexDirection='column'
          gap={5}
          padding={mediaSM ? '0 1rem' : '0 4rem'}
        >
          <Typography variant='h1' sx={SX_GLOBAL.CENTER_TEXT}>
            {CONTENT.DASHBOARD_TITLE}
          </Typography>
        </Stack>
      </SectionLayout>
    </>
  );
};
