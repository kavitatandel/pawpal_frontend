import OwnerDogsForm from "components/Forms/OwnerDogsForm";
import OwnerHeader from "components/Layout/OwnerHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

//this form will be display all dogs of owner
const OwnerDogs = () => {
  return (
    <>
      <OwnerHeader />
      <Body>
        <OwnerDogsForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default OwnerDogs;
