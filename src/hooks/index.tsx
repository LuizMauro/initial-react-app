import React from "react";

import { AuthProvider } from "./AuthenticateContext";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
