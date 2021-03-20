import { FC } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';

export interface IProps {
  route: RouteConfig,
}

export const App: FC<IProps> = ({
  route,
}) => (
  renderRoutes(route.routes)
);
