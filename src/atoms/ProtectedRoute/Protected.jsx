import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../services/auth/auth.service";

export const Protected = ({ children }) => {
  let navigate = useNavigate();
  const [loaded, SetLoaded] = useState(false);

  useEffect(() => {
    if (loaded) return;
    if (!isLoggedIn()) navigate("/");
    SetLoaded(true);
  }, [loaded, navigate]);
  return (
    <>{!loaded ? <div>Cargando...</div> : children ? children : <Outlet />}</>
  );
};
