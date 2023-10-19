import { CONTENT } from '../../constants/content';
import { SX_GLOBAL } from '../../constants/sx/sxGlobal';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Stack, Typography, useMediaQuery } from '@mui/material';

export const Tablas = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Helmet>
        <title>PersonIA - Tablas</title>
        <meta name='description' content='PersonIA - Tablas' />
      </Helmet>
      <SectionLayout>
        <Stack
          flexDirection='column'
          gap={5}
          padding={mediaSM ? '0 1rem' : '0 4rem'}
        >
          <Typography variant='h1' sx={SX_GLOBAL.CENTER_TEXT}>
            {CONTENT.TABLES_TITLE}
          </Typography>
          <Typography
            variant='h2'
            sx={[
              SX_GLOBAL.CENTER_TEXT,
              {
                fontWeight: '400',
              },
            ]}
          >
            {CONTENT.TABLES_DESCRIPTION}
          </Typography>
        </Stack>
      </SectionLayout>
    </>
  );
};
