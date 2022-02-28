import { useParams } from "react-router-dom";
import DogInfoForm from "components/Forms/DogInfoForm";
import Header from "components/Layout/Header";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import DLHeader from "components/Layout/DLHeader";

//this form will be displayed for doglover when he wants to see dod info
const DogInfo = () => {
  const { dogid } = useParams();

  return (
    <>
      {/* <Header /> */}
      <DLHeader />
      <Body>
        <DogInfoForm dogid={dogid} style={{ zIndex: "3" }} />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default DogInfo;
