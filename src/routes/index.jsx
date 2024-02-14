import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Protected } from "../atoms/ProtectedRoute/Protected";
import Login from "../pages/Login";
import ModulesPage from "../pages/ModulesPage";
import AppointmentPage from "../pages/AppointmentPage";
import UpdateCreatePage from "../pages/UpdateCreatePage";

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
          path="/appointments/create"
          element={
            <Protected>
              <ModulesPage
                content={<p style={{ color: "black" }}>CREAR CITAS</p>}
              />
            </Protected>
          }
        />
        <Route
          exact
          path="/appointments/update"
          element={
            <Protected>
              <ModulesPage content={<UpdateCreatePage />} />
            </Protected>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
