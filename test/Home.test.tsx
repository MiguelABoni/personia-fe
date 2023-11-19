import { HomeComponent } from '../src/components/HomeComponent/HomeComponent';
import { CONTENT } from '../src/constants/content';
import { PATHS } from '../src/constants/paths';
import { RouterComponent } from './RouterComponent';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Route } from 'react-router-dom';

describe('Pagina - Home', () => {
  beforeEach(cleanup);

  it('Debería renderizar el componente', () => {
    render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<HomeComponent />} />
      </RouterComponent>,
    );
  });

  it('Debería mostrar el titulo "Accede a detalles clave sobre los casos de vulnerabilidad que se presentan en Medellín"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<HomeComponent />} />
      </RouterComponent>,
    );

    const homeTitleElement = getByTestId('home-title');
    expect(homeTitleElement).toBeDefined();
    expect(homeTitleElement.textContent).toBe(CONTENT.HOME_TITLE);
  });

  it('Debería renderizar el Botón de "Dashboard"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<HomeComponent />} />
      </RouterComponent>,
    );

    const dashboardButtonElement = getByTestId('dashboard-button');
    expect(dashboardButtonElement).toBeDefined();
    expect(dashboardButtonElement.textContent).toBe(CONTENT.DASHBOARD_TITLE);
  });

  it('Debería renderizar el Botón de "Gráficos"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<HomeComponent />} />
      </RouterComponent>,
    );

    const graphicsButtonElement = getByTestId('graphics-button');
    expect(graphicsButtonElement).toBeDefined();
    expect(graphicsButtonElement.textContent).toBe(CONTENT.GRAPHICS_TITLE);
  });

  it('Debería renderizar el Botón de "Tablas"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<HomeComponent />} />
      </RouterComponent>,
    );

    const tablesButtonElement = getByTestId('tables-button');
    expect(tablesButtonElement).toBeDefined();
    expect(tablesButtonElement.textContent).toBe(CONTENT.TABLES_TITLE);
  });
});
