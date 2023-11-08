import { WordCloudComponent } from '../../components/WordCloudComponent/WordCloudComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const WordCloud: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - WordCloud</title>
        <meta name='description' content='PersonIA - WordCloud' />
      </Helmet>
      <SectionLayout>
        <WordCloudComponent />
      </SectionLayout>
    </>
  );
};
