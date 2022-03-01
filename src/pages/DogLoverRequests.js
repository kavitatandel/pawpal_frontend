import MasterHeader from "components/Layout/MasterHeader";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

import DogLoverRequestsForm from "components/Forms/DogLoverRequestsForm";

//this form will be display all dogs of owner
const OwnerDogRequests = () => {
  return (
    <>
      <MasterHeader />
      <Body>
        <DogLoverRequestsForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default OwnerDogRequests;
