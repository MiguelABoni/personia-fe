import { Header } from '../src/components/Header/Header';
import { CONTENT } from '../src/constants/content';
import { PATHS } from '../src/constants/paths';
import { RouterComponent } from './RouterComponent';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Route } from 'react-router-dom';

describe('Pagina - Header', () => {
  beforeEach(cleanup);

  it('Debería renderizar el componente', () => {
    render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<Header />} />
      </RouterComponent>,
    );
  });

  it('Debería mostrar el titulo de la aplicación "PersonIA"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<Header />} />
      </RouterComponent>,
    );

    const AppTitleElement = getByTestId('app-title');
    expect(AppTitleElement).toBeDefined();
    expect(AppTitleElement.textContent).toBe(CONTENT.APP_TITLE);
  });

  it('Debería renderizar el logo de la Personería de Medellín"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<Header />} />
      </RouterComponent>,
    );

    const personeriaLogoElement = getByTestId('logo-Personería De Medellín');
    expect(personeriaLogoElement).toBeDefined();
  });

  it('Debería renderizar el logo del Politécnico Colombiano Jaime Isaza Cadavid', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<Header />} />
      </RouterComponent>,
    );

    const politecnicoLogoElement = getByTestId(
      'logo-Politécnico Colombiano Jaime Isaza Cadavid',
    );
    expect(politecnicoLogoElement).toBeDefined();
  });

  it('Debería renderizar el logo de la Universidad de Medellín', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<Header />} />
      </RouterComponent>,
    );

    const universidadDeMedellinLogoElement = getByTestId(
      'logo-Universidad De Medellín',
    );
    expect(universidadDeMedellinLogoElement).toBeDefined();
  });
});
