import AppRoutes from '../../routes'
import {UserProvider} from "../../context/UserContext/UserProvider";

export default function ContainerRoutes() {
  return (
    <>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </>
  )
}
