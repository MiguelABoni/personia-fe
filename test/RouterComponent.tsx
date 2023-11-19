import { QueryProvider } from '../src/layers/reactQuery/QueryProvider';
import { FC, ReactElement } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

export const RouterComponent: FC<{ children: ReactElement }> = ({
  children,
}) => {
  return (
    <QueryProvider>
      <BrowserRouter>
        <Routes>{children}</Routes>
      </BrowserRouter>
    </QueryProvider>
  );
};
