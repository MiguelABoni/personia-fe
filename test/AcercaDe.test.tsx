import { AcercaDeButton } from '../src/components/AcercaDeButton/AcercaDeButton';
import { AcercaDeComponent } from '../src/components/AcercaDeComponent/AcercaDeComponent';
import { PATHS } from '../src/constants/paths';
import { RouterComponent } from './RouterComponent';
import { cleanup, render } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Route } from 'react-router-dom';

describe('Pagina - Acerca De', () => {
  beforeEach(cleanup);

  it('Debería renderizar el botón flotante', () => {
    render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<AcercaDeButton />} />
      </RouterComponent>,
    );
  });

  it('Debería renderizar el componente', () => {
    render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<AcercaDeComponent />} />
      </RouterComponent>,
    );
  });

  it('Debería renderizar el titulo de "Acerca De"', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<AcercaDeComponent />} />
      </RouterComponent>,
    );

    const acercaDeTitleElement = getByTestId('title-Acerca De');
    expect(acercaDeTitleElement).toBeDefined();
    expect(acercaDeTitleElement.textContent).toBe('Acerca De');
  });

  it('Debería renderizar la imagen del componente', () => {
    const { getByTestId } = render(
      <RouterComponent>
        <Route path={PATHS.HOME} element={<AcercaDeComponent />} />
      </RouterComponent>,
    );

    const acercaDeImageElement = getByTestId(
      'image-Acerca De - Personeria de Medellín',
    );
    expect(acercaDeImageElement).toBeDefined();
  });
});
