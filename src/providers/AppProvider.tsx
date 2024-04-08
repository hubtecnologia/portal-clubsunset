import React, { PropsWithChildren } from 'react';
import ErrorBoundary from '@/handlers/ErrorBoundary';

type AppProviderProps = PropsWithChildren<Record<string, unknown>>;

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ErrorBoundary>{children}</ErrorBoundary>
);

export default AppProvider;
