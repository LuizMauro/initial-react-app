import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '@pages/public/auth/Login';

interface IRoute {
  path: string;
  component: React.ComponentType<any>;
}

const routes: IRoute[] = [
  {
    path: '/',
    component: () => <Redirect to="/login" />,
  },
  {
    path: '/login',
    component: () => <Login />,
  },
  {
    path: '/register',
    component: () => <h1>Register auth</h1>,
  },

  {
    path: '*',
    component: () => <Redirect to="/login" />,
  },
];

function RouteWithSubRoutes(route: IRoute, key: number) {
  return (
    <Route key={key} path={route.path} exact component={route.component} />
  );
}

function RouteAuth() {
  return (
    <div>
      <Switch>{routes.map((route, i) => RouteWithSubRoutes(route, i))}</Switch>
    </div>
  );
}

export default RouteAuth;
