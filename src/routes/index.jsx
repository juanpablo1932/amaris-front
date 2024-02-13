import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Protected } from "../atoms/ProtectedRoute/Protected";
import Login from "../pages/Login";
import ModulesPage from "../pages/ModulesPage";
import AppointmentPage from "../pages/AppointmentPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          exact
          path="/appointments"
          element={
            <Protected>
              <ModulesPage content={<AppointmentPage />} />
            </Protected>
          }
        />
        <Route
          exact
          path="/appointments/manage"
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
