import "./App.css";
import { AppProvider } from "./context/AppContext/AppProvider";
import { AppointmentProvider } from "./context/AppointmentContext/AppointmentProvider";
import ContainerRoutes from "./templates/ContainerRoutes";

const providers = [AppProvider, AppointmentProvider];

function App() {
  const ProviderTree = providers.reduce(
    (accumulator, Provider) => <Provider>{accumulator}</Provider>,
    <>
      <ContainerRoutes />
    </>
  );

  return ProviderTree;
}

export default App;
