import OwnerDogsForm from "components/Forms/OwnerDogsForm";
import Header from "components/Layout/Header";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

//this form will be display all dogs of owner
const OwnerDogs = () => {
  return (
    <>
      <Header />
      <Body>
        <OwnerDogsForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default OwnerDogs;
