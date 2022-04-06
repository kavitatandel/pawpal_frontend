import { useParams } from "react-router-dom";
import DogInfoForm from "components/Forms/DogInfoForm";
import MasterHeader from "components/Layout/MasterHeader";
import { Body } from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";

//this form will be displayed for doglover when he wants to see dod info
const DogInfo = () => {
  const { dogid } = useParams();

  return (
    <>
      <MasterHeader />
      <Body>
        <DogInfoForm dogid={dogid} style={{ zIndex: "3" }} />
      </Body>
      {/* <CenteredFooter /> */}
    </>
  );
};

export default DogInfo;
