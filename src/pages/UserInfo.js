import ProfileForm from "components/Forms/ProfileForm";
import MasterHeader from "components/Layout/MasterHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

const UserInfo = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        <ProfileForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default UserInfo;
