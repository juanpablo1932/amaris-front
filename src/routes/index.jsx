import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Protected } from "../atoms/ProtectedRoute/Protected";
import Login from "../pages/Login";
import ModulesPage from "../pages/ModulesPage";
import { UserContext } from "../context/UserContext/UserContext";

const AppRoutes = () => {
  const { getUser, getRol } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/aca"
          element={
            <h1>
              {getUser}
              {getRol}
            </h1>
          }
        />
        <Route
          exact
          path="/appointments"
          element={
            <Protected>
              <ModulesPage content={<h1>Estamos dentro</h1>} />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
