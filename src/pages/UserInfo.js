import ProfileForm from "components/Forms/ProfileForm";
import Header from "components/Layout/Header";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

const UserInfo = () => {
  return (
    <>
      <Header />
      <Body>
        <ProfileForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default UserInfo;
