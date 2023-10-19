import { SectionComponent } from '../../components/SectionComponent/SectionComponent';
import { CONTENT } from '../../constants/content';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { Helmet } from 'react-helmet';
import { Stack, useMediaQuery } from '@mui/material';

export const WordCloud = () => {
  const mediaSM = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Helmet>
        <title>PersonIA - WordCloud</title>
        <meta name='description' content='PersonIA - WordCloud' />
      </Helmet>
      <SectionLayout>
        <Stack
          flexDirection='column'
          gap={5}
          padding={mediaSM ? '0 1rem' : '0 4rem'}
        >
          <SectionComponent
            title='WordCloud'
            description={CONTENT.WORD_CLOUD_DESCRIPTION}
          />
        </Stack>
      </SectionLayout>
    </>
  );
};
