import MasterHeader from "components/Layout/MasterHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

import OwnerDogRequestsForm from "components/Forms/OwnerDogRequestsForm";

//this form will be display all dogs of owner
const OwnerDogRequests = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        <OwnerDogRequestsForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default OwnerDogRequests;
