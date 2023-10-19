import { SectionComponent } from '../../components/SectionComponent/SectionComponent';
import { CONTENT } from '../../constants/content';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Stack, useMediaQuery } from '@mui/material';

export const SubTemas = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Helmet>
        <title>PersonIA - SubTemas</title>
        <meta name='description' content='PersonIA - SubTemas' />
      </Helmet>
      <SectionLayout>
        <Stack
          flexDirection='column'
          gap={5}
          padding={mediaSM ? '0 1rem' : '0 4rem'}
        >
          <SectionComponent
            title='Subtemas'
            description={CONTENT.TABLES_DETAIL_DESCRIPTION}
          />
        </Stack>
      </SectionLayout>
    </>
  );
};
