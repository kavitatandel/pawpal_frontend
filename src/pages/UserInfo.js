import ProfileForm from "components/Forms/ProfileForm";
import OwnerHeader from "components/Layout/OwnerHeader";
import DLHeader from "components/Layout/DLHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

const UserInfo = () => {
  return (
    <>
      <OwnerHeader />
      {/* <DLHeader /> */}
      <Body>
        <ProfileForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default UserInfo;
