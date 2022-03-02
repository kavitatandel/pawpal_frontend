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

//import { GetApprovedRequestsForOwner } from "../../logic/PlayDateFunctions";

const OwnerApprovedRequests = ({ dogApprovedRequestsInfo, setDogApprovedRequestsInfo }) => {
    const [user, setUser] = useContext(UserContext);
    const [dogRequestsInfo, setDogRequestsInfo] = useState([]);

    // const getReuqestData = () => {
    //     const owner_id = user._id;
    //     GetApprovedRequestsForOwner(owner_id).then((res) => {
    //         // console.log(res)
    //         setDogRequestsInfo(res);
    //         // console.log(dogRequestsInfo)
    //     })
    //         .catch((err) => console.log(err));
    // }

    // useEffect(() => {
    //     getReuqestData();
    // }, [])

    return (
        <>
            <Container>
                <MKBox>
                    <MKTypography
                        variant="h5"
                        fontWeight="medium"
                        color="dark"
                        textAlign="center"
                    >
                        Approved Requests
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
                    {dogApprovedRequestsInfo === undefined ? <h5>No Playdate Requests Found. </h5> : dogApprovedRequestsInfo.length === 0 ? <h5>No Playdate Requests Found. </h5> : ""}
                    {dogApprovedRequestsInfo !== undefined && dogApprovedRequestsInfo.map((request, index) => {

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
                                        {request.DogLovers.profile_pic !== undefined ?
                                            <MKAvatar
                                                top={-50}
                                                zIndex={2}
                                                src={`${request.DogLovers.profile_pic}`}
                                                alt={`${request.DogLovers.first_name}`}
                                                shadow="xl"
                                                sx={{ width: "2.5rem", height: "2.5rem" }}
                                                style={{ border: "3.2px solid white", marginRight: "1rem" }}
                                            />
                                            :
                                            <MKAvatar
                                                top={-50}
                                                zIndex={2}
                                                src=''
                                                alt={`${request.DogLovers.first_name}`}
                                                shadow="xl"
                                                sx={{ width: "2.5rem", height: "2.5rem" }}
                                                style={{ border: "3.2px solid white", marginRight: "1rem" }}
                                            />
                                        }

                                    </div>

                                    <div
                                        className="DogLoverName"
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
                                            {request.DogLovers.first_name} {request.DogLovers.last_name}
                                        </MKTypography>
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
                                        className="ButtonContainer"
                                        style={{

                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "flex-end ",
                                            //   border: "2px solid red",
                                            width: "20%",
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
                                                width: "70rem"
                                            }}
                                        // value={request._id}
                                        // onClick={handleApproveReject}
                                        >
                                            Delete
                                        </MKButton>
                                    </div>

                                </div>
                            </Card>
                        )
                    })}

                </MKBox>
            </Container>
        </>
    )
}

export default OwnerApprovedRequests;