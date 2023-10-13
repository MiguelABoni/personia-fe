import { PATHS, SECTION_PATHS } from '../constants/paths';
import { AcercaDe } from './AcercaDe/AcercaDe';
import { Comunas } from './Comunas/Comunas';
import { DashBoard } from './Dashboard/Dashboard';
import { Eventos } from './Eventos/Eventos';
import { Graficos } from './Graficos/Graficos';
import { Home } from './Home/Home';
import { Municipios } from './Municipios/Municipios';
import { Ngramas } from './Ngramas/Ngramas';
import { Servicios } from './Servicios/Servicios';
import { SubTemas } from './SubTemas/SubTemas';
import { Tablas } from './Tablas/Tablas';
import { Temas } from './Temas/Temas';
import { Topicos } from './Topicos/Topicos';
import { WordCloud } from './WordCloud/WordCloud';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.DASHBOARD} element={<DashBoard />} />
        <Route path={PATHS.GRAPHICS} element={<Graficos />} />
        <Route path={PATHS.TABLES} element={<Tablas />} />
        <Route path={SECTION_PATHS.EVENTS} element={<Eventos />} />
        <Route path={SECTION_PATHS.TOPICS} element={<Topicos />} />
        <Route path={SECTION_PATHS.NGRAMAS} element={<Ngramas />} />
        <Route path={SECTION_PATHS.WORD_CLOUD} element={<WordCloud />} />
        <Route path={SECTION_PATHS.MUNICIPIOS} element={<Municipios />} />
        <Route path={SECTION_PATHS.COMUNAS} element={<Comunas />} />
        <Route path={SECTION_PATHS.SERVICES} element={<Servicios />} />
        <Route path={SECTION_PATHS.TEMAS} element={<Temas />} />
        <Route path={SECTION_PATHS.SUB_TEMAS} element={<SubTemas />} />
        <Route path={PATHS.ABOUT} element={<AcercaDe />} />
      </Routes>
    </BrowserRouter>
  );
};
