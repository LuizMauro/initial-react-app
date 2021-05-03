import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '@pages/private/Dashboard';

interface IRoute {
  path: string;
  component: React.ComponentType<any>;
}

const routes: IRoute[] = [
  {
    path: '/',
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: () => <Home />,
  },

  {
    path: '*',
    component: () => <Redirect to="/home" />,
  },
];

function RouteWithSubRoutes(route: IRoute, key: number) {
  return (
    <Route key={key} path={route.path} exact component={route.component} />
  );
}

function RouteDashBoard() {
  return (
    <div>
      <Switch>{routes.map((route, i) => RouteWithSubRoutes(route, i))}</Switch>
    </div>
  );
}

export default RouteDashBoard;
