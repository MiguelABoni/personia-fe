import { NgramasComponent } from '../src/components/NgramasComponent/NgramasComponent';
import { PATHS } from '../src/constants/paths';
import { RouterComponent } from './RouterComponent';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Route } from 'react-router-dom';

describe('Pagina - Ngramas', () => {
  beforeEach(cleanup);

  it('Debería renderizar el componente', () => {
    render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<NgramasComponent />} />
      </RouterComponent>,
    );
  });

  it('Debería mostrar el titulo "Ngramas"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<NgramasComponent />} />
      </RouterComponent>,
    );

    const ngramasTitleElement = getByTestId('title-Ngramas');
    expect(ngramasTitleElement).toBeDefined();
    expect(ngramasTitleElement.textContent).toBe('Ngramas');
  });

  it('Debería renderizar el Botón de "Atrás"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<NgramasComponent />} />
      </RouterComponent>,
    );

    const backButtonElement = getByTestId('back-button');
    expect(backButtonElement).toBeDefined();
  });

  it('Debería renderizar el Botón de "Generar Ngramas"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<NgramasComponent />} />
      </RouterComponent>,
    );

    const generateNgramasButtonElement = getByTestId('generate-ngramas-button');
    expect(generateNgramasButtonElement).toBeDefined();
    expect(generateNgramasButtonElement.textContent).toBe('Generar Ngramas');
  });
});
