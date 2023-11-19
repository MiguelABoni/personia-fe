import { TemasComponent } from '../src/components/TemasComponent/TemasComponent';
import { PATHS } from '../src/constants/paths';
import { RouterComponent } from './RouterComponent';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Route } from 'react-router-dom';

describe('Pagina - Temas', () => {
  beforeEach(cleanup);

  it('Debería renderizar el componente', () => {
    render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TemasComponent />} />
      </RouterComponent>,
    );
  });

  it('Debería mostrar el titulo "Temas"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TemasComponent />} />
      </RouterComponent>,
    );

    const temasTitleElement = getByTestId('title-Temas');
    expect(temasTitleElement).toBeDefined();
    expect(temasTitleElement.textContent).toBe('Temas');
  });

  it('Debería renderizar el Botón de "Atrás"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TemasComponent />} />
      </RouterComponent>,
    );

    const backButtonElement = getByTestId('back-button');
    expect(backButtonElement).toBeDefined();
  });

  it('Debería renderizar el componente de loading', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TemasComponent />} />
      </RouterComponent>,
    );

    const loadingElement = getByTestId('loading-image');
    expect(loadingElement).toBeDefined();
  });
});
