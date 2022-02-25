import Header from "components/Layout/Header";
import ProfileForm from "components/Forms/ProfileForm";
import PageContainerNoBGD from "components/Layout/PageContainerNoBGD";
import MasterPageContainer from "components/Layout/MasterPageContainer";

const Profile = () => {
  return (
    <>
      {/* <MasterPageContainer>
        <ProfileForm />
      </MasterPageContainer> */}
      <Header />
      <ProfileForm />
      <PageContainerNoBGD />
    </>
  );
};

export default Profile;
