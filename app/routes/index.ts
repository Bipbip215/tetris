import { RouteConfig } from 'react-router-config';
import { FC } from 'react';
import { App } from '../App';
import { menu } from './menu';

export const routes: RouteConfig[] = [
  {
    component: App as FC,
    routes: [
      menu,
    ],
  },
];
