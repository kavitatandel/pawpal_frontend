import Header from "components/Layout/Header";
import PageContainerNoBGD from "components/Layout/PageContainerNoBGD";
import { useParams } from 'react-router-dom';
import DogInfoForm from "components/Forms/DogInfoForm";

//this form will be displayed for doglover when he wants to see dod info
const DogInfo = () => {
    const { dogid } = useParams();

    return (
        <>
            <Header />
            <DogInfoForm dogid={dogid} />
            <PageContainerNoBGD />
        </>
    )
}

export default DogInfo;