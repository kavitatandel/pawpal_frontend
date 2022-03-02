import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';

import { getDogLoverRequests, getDogLoverApprovedRequests } from "../../logic/PlayDateFunctions";
import { useNavigate, useParams } from "react-router";
import DogLoverApprovedRequests from "./DogLoverApprovedRequests";
import DogLoverRequestInfoModal from "../Modals/DogLoverRequestInfoModal";


const DogLoverRequestsForm = () => {
    const [user, setUser] = useContext(UserContext);
    const [dogRequestsInfo, setDogRequestsInfo] = useState([]);
    const [dogApprovedRequestsInfo, setDogApprovedRequestsInfo] = useState([]);
    const [selectedDogRequest, setSelectedDogRequest] = useState([]);

    //for modal
    const [show, setShow] = useState(false);
    //commented to get request again when user approve/reject
    const toggleModal = () => setShow(!show);


    //get dog 'Pending' requests
    const getRequestData = () => {
        const owner_id = user._id;
        getDogLoverRequests(owner_id).then((res) => {
            //console.log(res)
            setDogRequestsInfo(res);
        })
            .catch((err) => console.log(err));
    }

    //get dog 'Approved' request
    const getApprovedRequestData = () => {
        const owner_id = user._id;
        getDogLoverApprovedRequests(owner_id).then((res) => {
            // console.log("Dog Lover Approved Request:")
            // console.log(res);
            setDogApprovedRequestsInfo(res);
        })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        // console.log("Dog lover request form")
        getRequestData();
        getApprovedRequestData();

    }, [])

    const handleInfo = (e) => {
        e.preventDefault();

        //get the clicked item id
        const selectedRequestId = e.target.value;
        //find selected request id data
        const selectedRequest = dogRequestsInfo.find(dogRequest => dogRequest._id === selectedRequestId)
        setSelectedDogRequest(selectedRequest);

        toggleModal();
    }

    return (
        <>
            {/* // Container between top & Footer */}
            <MKBox
                px={1}
                width="100%"
                top={0}
                height="auto"
                mx="auto"
                mr={0}
                ml={0}
                position="relative"
                zindex={-1}
                sx={{ padding: "0" }}
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="center"
            >

                {/* Container for top background Image */}
                <MKBox
                    // style={{ border: "10px solid green" }}

                    minHeight="20vh"
                    width="100%"
                    //   style={{ border: "3px solid green" }}
                    sx={{
                        backgroundImage: ({
                            functions: { linearGradient, rgba },
                            palette: { gradients },
                        }) =>
                            `${linearGradient(
                                rgba(gradients.dark.main, 0.2),
                                rgba(gradients.dark.state, 0.2)
                            )}, url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "grid",
                        placeItems: "center",
                    }}
                />

                {/* Container for body area below featured img */}
                <MKBox
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    minHeight="auto"
                    top={0}
                    width="100%"
                    style={{ border: "3px solid red" }}

                //   style={{ border: "3px solid green" }}
                >
                    <Card
                        // zIndex={0}
                        style={{ position: "relative", border: "3px solid green" }}
                        sx={{
                            width: "90%",
                            height: "auto",
                            p: 2,
                            mt: -2,
                            mx: { xs: 2, lg: 3 },
                            position: "relative",
                            mb: 4,
                            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                                rgba(white.main, 0.8),
                            backdropFilter: "saturate(200%) blur(30px)",
                            boxShadow: ({ boxShadows: { xxl } }) => xxl,
                        }}
                    >
                        {selectedDogRequest.length !== 0 ?
                            <DogLoverRequestInfoModal
                                show={show}
                                setShow={setShow}
                                toggleModal={toggleModal}
                                selectedDogRequest={selectedDogRequest}
                                setSelectedDogRequest={setSelectedDogRequest}

                            />
                            : <h1></h1>
                        }
                        <Container>
                            <MKBox>
                                <MKTypography
                                    variant="h5"
                                    fontWeight="medium"
                                    color="dark"
                                    textAlign="center"
                                >
                                    My Playdate Requests
                                </MKTypography>
                            </MKBox>

                            {/* ************************** Dog Details */}
                            <MKBox px={0}
                                width="100%"
                                top={10}
                                height="auto"
                                mx="auto"
                                mr={0}
                                ml={0}
                                position="relative"
                                zindex={1}
                                sx={{ padding: "0" }}
                                display="flex"
                                flexDirection="column"
                                justifyContent="flex-start"
                                alignItems="center"
                                textAlign="center"
                                style={{
                                    // border: "3px solid blue",
                                    backgroundColor: "rgba(39, 46, 245, 0.2)",
                                }}
                                minheight="80vh">
                                {/* map thru searched dogs */}
                                {dogRequestsInfo === undefined ? <h5>No Playdate Requests Found. </h5> : dogRequestsInfo.length === 0 ? <h5>No Playdate Requests Found. </h5> : ""}
                                {
                                    dogRequestsInfo !== undefined && dogRequestsInfo.map((request, index) => {

                                        return (
                                            <Card key={index} flex-basis="1" style={{ width: "95%", height: "5rem", marginTop: "1rem" }}>
                                                <div
                                                    className="mainContainer"
                                                    style={{
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignContent: "center",
                                                        padding: "1rem",

                                                    }}
                                                >
                                                    <div
                                                        className="Avatar"
                                                        style={{
                                                            width: "15%",
                                                            marginLeft: "0.5rem",
                                                            marginRight: "0.5rem",
                                                            justifyContent: "flex-start",
                                                            alignItems: "center"
                                                        }}
                                                    >
                                                        {request.DogsRequests.profile_photo !== undefined ?
                                                            <MKAvatar
                                                                top={-50}
                                                                zIndex={2}
                                                                src={`${request.DogsRequests.profile_photo}`}
                                                                alt={`${request.DogsRequests.name}`}
                                                                shadow="xl"
                                                                sx={{ width: "2.5rem", height: "2.5rem" }}
                                                                style={{ border: "3.2px solid white", marginRight: "1rem" }}
                                                            />
                                                            :
                                                            <MKAvatar
                                                                top={-50}
                                                                zIndex={2}
                                                                src=''
                                                                alt={`${request.DogsRequests.name}`}
                                                                shadow="xl"
                                                                sx={{ width: "2.5rem", height: "2.5rem" }}
                                                                style={{ border: "3.2px solid white", marginRight: "1rem" }}
                                                            />
                                                        }

                                                    </div>
                                                    <div
                                                        className="DogName"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "flex-start",
                                                            //   border: "2px solid red",
                                                            width: "25%",
                                                        }}
                                                    >
                                                        <MKTypography
                                                            variant="p"
                                                            fontWeight="medium"
                                                            style={{ fontSize: "0.90rem" }}
                                                        >
                                                            {request.DogsRequests.name}                                                         </MKTypography>
                                                    </div>
                                                    <div
                                                        className="MeetingLocation"
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "flex-start",
                                                            //   border: "2px solid red",
                                                            width: "25%",
                                                        }}
                                                    >
                                                        <MKTypography
                                                            variant="p"
                                                            fontWeight="medium"
                                                            style={{ fontSize: "0.90rem" }}
                                                        >
                                                            {request.meeting_location}                                                         </MKTypography>
                                                    </div>
                                                    <div
                                                        className="StartDate"
                                                        style={{
                                                            fontSize: "0.8rem",
                                                            width: "20%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "flex-start",
                                                            width: "20%",
                                                        }}
                                                    >
                                                        <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
                                                            {/* {(new Date(request.start_date)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} */}
                                                            {new Date(request.start_date).toLocaleDateString()}

                                                        </MKTypography>
                                                    </div>
                                                    <div
                                                        className="StartTime"
                                                        style={{
                                                            //   border: "2px solid red",
                                                            width: "20%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "flex-start",
                                                            width: "25%",
                                                        }}
                                                    >

                                                        <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
                                                            {request.start_time}
                                                            {/* {(request.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} */}
                                                        </MKTypography>
                                                    </div>
                                                    <div
                                                        className="EndTime"
                                                        style={{
                                                            //   border: "2px solid red",
                                                            width: "20%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "flex-start",
                                                            width: "25%",
                                                        }}
                                                    >
                                                        <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
                                                            {request.end_time}
                                                        </MKTypography>
                                                    </div>
                                                    <div
                                                        className="status"
                                                        style={{
                                                            //   border: "2px solid red",
                                                            width: "20%",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "flex-start",
                                                            width: "25%",
                                                        }}
                                                    >
                                                        {request.status === 'Pending' ?
                                                            <MKTypography variant="p" style={{ fontSize: "0.90rem", color: "blue" }}>
                                                                {request.status}
                                                            </MKTypography>
                                                            :
                                                            request.status === 'Accepted'
                                                                ?
                                                                <MKTypography variant="p" style={{ fontSize: "0.90rem", color: "green" }}>
                                                                    {request.status}
                                                                </MKTypography>
                                                                :
                                                                <MKTypography variant="p" style={{ fontSize: "0.90rem", color: "red" }}>
                                                                    {request.status}
                                                                </MKTypography>
                                                        }

                                                    </div>
                                                    <div
                                                        className="ButtonContainer"
                                                        style={{

                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "flex-end ",
                                                            //   border: "2px solid red",
                                                            width: "10%",
                                                            marginRight: "1rem",
                                                        }}
                                                    >
                                                        <MKButton
                                                            size="small"
                                                            type="submit"
                                                            variant="gradient"
                                                            color="info"
                                                            style={{
                                                                // minWidth: "1rem",
                                                                width: "30rem",

                                                            }}
                                                            value={request._id}
                                                            onClick={handleInfo}
                                                        >
                                                            INFO
                                                        </MKButton>

                                                        {request.status === 'Rejected' ?
                                                            <>
                                                                <MKButton
                                                                    size="small"
                                                                    type="submit"
                                                                    variant="gradient"
                                                                    color="info"
                                                                    style={{
                                                                        // minWidth: "1rem",
                                                                        width: "30rem",
                                                                        marginLeft: "0.25rem"
                                                                    }}
                                                                // value={request._id}
                                                                // onClick={handleApproveReject}
                                                                >
                                                                    DELETE
                                                                </MKButton>
                                                            </>
                                                            :

                                                            ""
                                                        }

                                                    </div>

                                                </div>
                                            </Card>
                                        )
                                    })}

                            </MKBox>
                        </Container>
                        <br />
                        {/* <DogLoverApprovedRequests dogApprovedRequestsInfo={dogApprovedRequestsInfo} setDogApprovedRequestsInfo={setDogApprovedRequestsInfo} /> */}
                    </Card>
                </MKBox>
            </MKBox>
        </>
    );
};

export default DogLoverRequestsForm;