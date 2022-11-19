import { useCallback, createContext, useContext, useMemo, useState } from 'react';

const UserContext = createContext({ user: {}, setUser: () => {} });

//hook
export const useUserContext = () => {
  return useContext(UserContext);
};

function UserContextProvider({ children }) {
  const [user, setEmail] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'));
    } catch (e) {
      return {};
    }
  });

  const handleSetUser = useCallback((user) => {
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);
    setEmail(user);
  }, []);

  const value = useMemo(() => ({ user, setUser: handleSetUser }), [user, handleSetUser]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
