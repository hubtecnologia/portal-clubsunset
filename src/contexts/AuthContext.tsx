import { createContext, ReactNode, useEffect } from 'react';
import { useLoading } from '@/hooks/useLoading';
import { keycloak } from '@/keycloakConfig';
import Cookies from 'js-cookie';
import { useAuthStore } from '@/store/AuthStore';
import { setAuthenticated, setUserDetails } from '@/pages/Auth/authSlice';

export interface AuthContextData {
  isAuthenticated: boolean;
  token: string;
  userDetails: any;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { setLoading } = useLoading();
  const { setToken, setIsAuthenticated, token, isAuthenticated, userDetails } = useAuthStore();

  useEffect(() => {
    const updateToken = async (refresh = false) => {
      if (refresh) {
        try {
          const refreshed = await keycloak.updateToken(70);
          if (refreshed) {
            setToken(keycloak.token);
            if (keycloak.token != null) {
              Cookies.set('ClubSunset.token', keycloak.token);
            }
          }
        } catch (error) {
          console.error('Error updating token', error);
        }
      }
    };

    const initKeycloak = async () => {
      try {
        const authenticated = await keycloak.init({ onLoad: 'login-required' });
        if (authenticated) {
          setToken(keycloak.token);
          if (keycloak.token != null) {
            Cookies.set('ClubSunset.token', keycloak.token);
          }
          setIsAuthenticated(true);
          setUserDetails(await keycloak.loadUserInfo());
        } else {
          setToken('');
          Cookies.remove('ClubSunset.token');
          setAuthenticated(false);
          setUserDetails(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Keycloak initialization error', error);
      }
    };

    keycloak.onTokenExpired = () => {
      updateToken(true);
    };

    initKeycloak();
  }, [setIsAuthenticated, setLoading, setToken]);

  return (
    <AuthContext.Provider
      value={{
        token: token,
        isAuthenticated: isAuthenticated,
        userDetails: userDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
