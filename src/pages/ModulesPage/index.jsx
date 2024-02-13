import Profile from "../../templates/Profile";
import ManagerData from "../../molecules/ManagerData";
import DesplegableMenu from "../../organisms/DesplegableMenu";

export default function ModulesPage({ content }) {
  return (
    <>
      <Profile
        header={<ManagerData />}
        navbar={<DesplegableMenu />}
        content={content}
      />
    </>
  );
}
