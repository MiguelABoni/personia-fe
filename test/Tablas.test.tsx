import { TablasComponent } from '../src/components/TablasComponent/TablasComponent';
import { CONTENT } from '../src/constants/content';
import { PATHS } from '../src/constants/paths';
import { TABLE_SECTIONS } from '../src/constants/tableSections';
import { RouterComponent } from './RouterComponent';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Route } from 'react-router-dom';

describe('Pagina - Tablas', () => {
  beforeEach(cleanup);

  it('Debería renderizar el componente', () => {
    render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TablasComponent />} />
      </RouterComponent>,
    );
  });

  it('Debería mostrar el titulo "Tablas"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TablasComponent />} />
      </RouterComponent>,
    );

    const tablasTitleElement = getByTestId('tablas-title');
    expect(tablasTitleElement).toBeDefined();
    expect(tablasTitleElement.textContent).toBe(CONTENT.TABLES_TITLE);
  });

  it('Debería renderizar las tarjetas', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TablasComponent />} />
      </RouterComponent>,
    );

    for (let i = 0; i < TABLE_SECTIONS.length; i++) {
      const cardElement = getByTestId(`card-${TABLE_SECTIONS[i].title}`);
      expect(cardElement).toBeDefined();
    }
  });

  it('Debería renderizar el nombre de cada tarjeta', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<TablasComponent />} />
      </RouterComponent>,
    );

    for (let i = 0; i < TABLE_SECTIONS.length; i++) {
      const cardTitleElement = getByTestId(
        `card-${TABLE_SECTIONS[i].title}-title`,
      );
      expect(cardTitleElement).toBeDefined();
      expect(cardTitleElement.textContent).toBe(TABLE_SECTIONS[i].title);
    }
  });
});
