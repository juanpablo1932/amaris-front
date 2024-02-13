import { useEffect, useState } from "react";
import { getItem } from "../../services/localStorage";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    setLoaded(true);
    const userLocalStorage = getItem("user");
    if (userLocalStorage) setUser(userLocalStorage); // For load in ram
  }, [loaded, setUser, user]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </AppContext.Provider>
  );
};
