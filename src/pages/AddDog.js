import Header from "components/Layout/Header";
import Body from "components/Custom/CustomContainers";
import CenteredFooter from "components/Layout/CenteredFooter";
import AddDogForm from "components/Forms/AddDogForm";

//this form will be displayed for doglover when he wants to see dod info
const AddDog = () => {
  return (
    <>
      <Header />
      <Body>
        <AddDogForm />
      </Body>
      <CenteredFooter />
    </>
  );
};

export default AddDog;
