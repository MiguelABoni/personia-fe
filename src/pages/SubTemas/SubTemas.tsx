import { SubTemasComponent } from '../../components/SubTemasComponent/SubTemasComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const SubTemas: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - SubTemas</title>
        <meta name='description' content='PersonIA - SubTemas' />
      </Helmet>
      <SectionLayout>
        <SubTemasComponent />
      </SectionLayout>
    </>
  );
};
