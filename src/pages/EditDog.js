import MasterHeader from "components/Layout/MasterHeader";
import { Body } from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import EditDogForm from "components/Forms/EditDogForm";

//this form will be displayed for doglover when he wants to see dod info
const EditDog = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        <EditDogForm />
      </Body>
      {/* <CenteredFooter /> */}
    </>
  );
};

export default EditDog;
