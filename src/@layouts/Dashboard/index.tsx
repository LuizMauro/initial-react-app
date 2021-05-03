import React from 'react';

import { Container } from './styles';

const Dashboard: React.FC = ({ children }) => {
  return (
    <Container>
      <h1>Layout Dashboard</h1>
      {children}
    </Container>
  );
};

export default Dashboard;
