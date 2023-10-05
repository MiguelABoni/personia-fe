import { QueryProvider } from '../../layers/reactQuery/QueryProvider';
import { Home } from './Home';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, it } from 'vitest';

describe('Home Page', () => {
  afterEach(cleanup);

  it('should render', () => {
    render(
      <QueryProvider>
        <Home />
      </QueryProvider>,
    );
  });

  it('should render a title with the value "Home Page"', () => {
    render(
      <QueryProvider>
        <Home />
      </QueryProvider>,
    );
    screen.getByText('Home Page');
  });
});
