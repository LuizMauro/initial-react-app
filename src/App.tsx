import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Providers from '@hooks/index';
import Route from '@router/OrchestratorRoutes';

import GlobalCSS from '@styles/global';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <GlobalCSS />
        <Route />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
