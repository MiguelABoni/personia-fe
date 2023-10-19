import { SectionComponent } from '../../components/SectionComponent/SectionComponent';
import { CONTENT } from '../../constants/content';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Stack, useMediaQuery } from '@mui/material';

export const Topicos = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');
  return (
    <>
      <Helmet>
        <title>PersonIA - Topicos</title>
        <meta name='description' content='PersonIA - Topicos' />
      </Helmet>
      <SectionLayout>
        <Stack
          flexDirection='column'
          gap={5}
          padding={mediaSM ? '0 1rem' : '0 4rem'}
        >
          <SectionComponent
            title='Topicos'
            description={CONTENT.TOPICS_DESCRIPTION}
          />
        </Stack>
      </SectionLayout>
    </>
  );
};
