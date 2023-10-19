import { HomeComponent } from '../../components/HomeComponent/HomeComponent';
import { MainLayout } from '../../layouts/MainLayout/MainLayout';
import { FC } from 'react';
import { Helmet } from 'react-helmet';

export const Home: FC = () => {
  return (
    <>
      <Helmet>
        <title>PersonIA - Home</title>
        <meta name='description' content='PersonIA - Home' />
      </Helmet>
      <MainLayout>
        <HomeComponent />
      </MainLayout>
    </>
  );
};
