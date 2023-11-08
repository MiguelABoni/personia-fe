import { EventosComponent } from '../../components/EventosComponent/EventosComponent';
import { SectionLayout } from '../../layouts/SectionLayout/SectionLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Eventos: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Eventos</title>
        <meta name='description' content='PersonIA - Eventos' />
      </Helmet>
      <SectionLayout>
        <EventosComponent />
      </SectionLayout>
    </>
  );
};
