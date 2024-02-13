import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [getUser, setGetUser] = useState();
  const [getRol, setGetRol] = useState();
  const [getId, setId] = useState();
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
    const id = getItem("id");
    if (id) setId(id);
  }, [loaded, setGetUser, getUser, setGetRol, getRol]);

  return (
    <UserContext.Provider value={{ getUser, setGetUser, getRol, getId }}>
      {children}
    </UserContext.Provider>
  );
};
