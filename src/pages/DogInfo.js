import { useParams } from 'react-router-dom';

const DogInfo = () => {
    const { dogid } = useParams();

    return (
        <>
            {dogid}
            Dog Info
        </>
    )
}

export default DogInfo;