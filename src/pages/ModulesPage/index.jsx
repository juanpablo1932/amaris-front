import Profile from "../../templates/Profile";
import MainProfileHeader from "../../molecules/MainProfileHeader";
// import DesplegableMenu from "../../organisms/DesplegableMenu";

export default function ModulesPage({ content }) {
  return (
    <>
      <Profile
        header={<MainProfileHeader />}
        // navbar={<DesplegableMenu />}
        content={content}
      />
    </>
  );
}
