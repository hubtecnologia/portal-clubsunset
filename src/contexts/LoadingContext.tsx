import { createContext, ReactNode, useMemo, useState } from 'react';

export type LoadingContextData = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

export const LoadingContext = createContext({} as LoadingContextData);

type LoadingContextProps = {
  children: ReactNode;
};

export function LoadingProvider({ children }: LoadingContextProps) {
  const [loading, setLoading] = useState(false);

  const updatedValue = useMemo(
    () => ({
      loading,
      setLoading,
    }),
    [loading],
  );
  return <LoadingContext.Provider value={updatedValue}>{children}</LoadingContext.Provider>;
}
