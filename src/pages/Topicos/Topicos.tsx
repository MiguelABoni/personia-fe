import { TopicosComponent } from '../../components/TopicosComponent/TopicosComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Topicos: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Topicos</title>
        <meta name='description' content='PersonIA - Topicos' />
      </Helmet>
      <SectionLayout>
        <TopicosComponent />
      </SectionLayout>
    </>
  );
};
