import Header from "components/Layout/Header";
import PageContainerNoBGD from "components/Layout/PageContainerNoBGD";
import OwnerDogsForm from "components/Forms/OwnerDogsForm";

//this form will be display all dogs of owner
const OwnerDogs = () => {
    return (
        <>
            <Header />
            <OwnerDogsForm />
            <PageContainerNoBGD />
        </>
    )
}

export default OwnerDogs;