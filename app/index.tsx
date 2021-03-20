import { render } from 'react-dom';
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

const root = document.getElementById('app-root');

render(
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>,
  root,
);
