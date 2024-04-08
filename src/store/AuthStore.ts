import { create } from 'zustand';

type AuthStore = {
  isAuthenticated: boolean;
  token: string;
  userDetails: any;
  setToken: (token: string | undefined) => void;
  setIsAuthenticated: (status: boolean) => void;
  setUserDetails: (userDetails: Record<string, never>) => void;
};

export const useAuthStore = create<AuthStore>((set) => {
  return {
    token: '',
    isAuthenticated: false,
    userDetails: {},
    setToken: (token) => set(() => ({ token })),
    setIsAuthenticated: (state) => set(() => ({ isAuthenticated: state })),
    setUserDetails: (userDetails) => set(() => ({ userDetails })),
  };
});
