import OwnerHeader from "components/Layout/OwnerHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import AddDogForm from "components/Forms/AddDogForm";

//this form will be displayed for doglover when he wants to see dod info
const AddDog = () => {
  return (
    <>
      <OwnerHeader />
      <Body>
        <AddDogForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default AddDog;
