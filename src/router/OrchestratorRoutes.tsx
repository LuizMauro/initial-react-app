import React from 'react';

import RouteDashBoard from './dashboard';

import RouteAuth from './auth';

import { useAuth } from '@hooks/AuthenticateContext';

import DashboardLayout from '@layouts/Dashboard';

const DrawLayoutDashboard = (Route: any) => {
  return (
    <DashboardLayout>
      <Route />
    </DashboardLayout>
  );
};

function OrchestratorRoutes() {
  const { user, token } = useAuth();

  if (!!user && !!token) {
    return DrawLayoutDashboard(RouteDashBoard);
  } else {
    return <RouteAuth />;
  }
}

export default OrchestratorRoutes;
