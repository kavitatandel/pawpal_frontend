import OwnerDogsForm from "components/Forms/OwnerDogsForm";
import MasterHeader from "components/Layout/MasterHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

//this form will be display all dogs of owner
const OwnerDogs = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        <OwnerDogsForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default OwnerDogs;
