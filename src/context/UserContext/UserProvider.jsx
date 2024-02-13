import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [getUser, setGetUser] = useState();
  const [getRol, setGetRol] = useState();
  console.log(getUser);
  const [loaded, setLoaded] = useState(false);

  function getItem(name) {
    const fromLS = localStorage.getItem(`${name}`);
    try {
      return JSON.parse(fromLS);
    } catch (error) {
      return fromLS;
    }
  }

  useEffect(() => {
    if (loaded) return;
    setLoaded(true);
    const name = getItem("name");
    if (name) setGetUser(name);
    const rol = getItem("rol");
    if (rol) setGetRol(rol);
  }, [loaded, setGetUser, getUser, setGetRol, getRol]);

  return (
    <UserContext.Provider value={{ getUser, setGetUser, getRol }}>
      {children}
    </UserContext.Provider>
  );
};
