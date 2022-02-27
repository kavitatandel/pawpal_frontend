import Header from "components/Layout/Header";
import PageContainerNoBGD from "components/Layout/PageContainerNoBGD";
import OwnerDogRequestsForm from "components/Forms/OwnerDogRequestsForm";

//this form will be display all dogs of owner
const OwnerDogRequests = () => {
    return (
        <>
            <Header />
            <OwnerDogRequestsForm />
        </>
    )
}

export default OwnerDogRequests;