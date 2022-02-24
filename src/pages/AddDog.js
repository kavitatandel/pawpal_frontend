import Header from "components/Layout/Header";
import PageContainerNoBGD from "components/Layout/PageContainerNoBGD";
import AddDogForm from "components/Forms/AddDogForm";

//this form will be displayed for doglover when he wants to see dod info
const AddDog = () => {
    return (
        <>
            <Header />
            <AddDogForm />
            {/* <PageContainerNoBGD /> */}
        </>
    )
}

export default AddDog;