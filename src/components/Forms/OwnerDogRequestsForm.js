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

import { GetPlayDateRequestsForOwner } from "../../logic/PlayDateFunctions";
import { useNavigate, useParams } from "react-router";

const OwnerDogRequestsForm = () => {
    const [user, setUser] = useContext(UserContext);
    const [dogRequests, setDogRequests] = useState([]);
    const navigate = useNavigate();

    const { dogid } = useParams();
    // console.log(dogid);
    console.log("DOG ID")
    console.log(dogid);

    useEffect(() => {
        //getDogsByOwner(user._id);
        console.log("owner dog request page - used id")
        console.log(user._id);
        const owner_id = user._id;
        GetPlayDateRequestsForOwner(owner_id).then((res) => {
            console.log(res)
            setDogRequests(res);
        })
            .catch((err) => console.log(err));

    }, [])

    // const handleChangeAdd = () => {
    //     navigate('/owner/adddog')
    // }


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
                        <Container>
                            <MKBox>
                                <MKTypography
                                    variant="h3"
                                    fontWeight="medium"
                                    color="dark"
                                    textAlign="center"
                                >
                                    My Dogs Requests
                                </MKTypography>
                            </MKBox>
                            {/* <MKBox mb={2} mt={2} display="flex" justifyContent="flex-end"> */}
                            {/* <MKButton
                                    size="large"
                                    variant="gradient"
                                    color="info"
                                    style={{
                                        marginLeft: "1.5rem",
                                        width: "8rem",
                                        minWidth: "180px",
                                    }}
                                    //onClick={navigate('/owner/adddog')}
                                    onClick={handleChangeAdd}
                                >
                                    Add Dogs
                                </MKButton>

                            </MKBox> */}

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
                                {dogRequests !== undefined && dogRequests.map((request, index) => {
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
                                                    <MKAvatar
                                                        top={-50}
                                                        zIndex={2}
                                                        // src={`${dog.profile_photo}`}
                                                        // alt={`${dog.name}`}
                                                        shadow="xl"
                                                        sx={{ width: "2.5rem", height: "2.5rem" }}
                                                        style={{ border: "3.2px solid white", marginRight: "1rem" }}
                                                    />
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
                                                        lucky
                                                        {/* {dog.name} */}
                                                    </MKTypography>
                                                </div>
                                                <div
                                                    className="DogType"
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
                                                        {/* {dog.breed} */}
                                                        poodler
                                                    </MKTypography>
                                                </div>
                                                <div
                                                    className="Age"
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
                                                        {/* {dog.size} */}
                                                        small
                                                    </MKTypography>
                                                </div>
                                                <div
                                                    className="Age"
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
                                                        {/* {dog.age_years} yrs {dog.age_months} mon. */}
                                                    </MKTypography>
                                                </div>
                                                <div
                                                    className="ButtonContainer"
                                                    style={{
                                                        width: "20%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "flex-end ",
                                                        //   border: "2px solid red",
                                                        width: "15%",
                                                        marginRight: "1rem",
                                                    }}
                                                >
                                                    <MKButton
                                                        size="small"
                                                        type="submit"
                                                        variant="gradient"
                                                        color="info"
                                                        style={{
                                                            minWidth: "1rem",
                                                        }}
                                                        onClick={() => navigate(`/owner/ownerdogrequests/${dogid}`)}>
                                                        Approve
                                                    </MKButton>
                                                </div>
                                                <div
                                                    className="ButtonContainer"
                                                    style={{
                                                        width: "20%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "flex-end ",
                                                        //   border: "2px solid red",
                                                        width: "15%",
                                                        marginRight: "1rem",
                                                    }}
                                                >
                                                    <MKButton
                                                        size="small"
                                                        type="submit"
                                                        variant="gradient"
                                                        color="info"
                                                        style={{
                                                            minWidth: "1rem",
                                                        }}
                                                    >
                                                        Reject
                                                    </MKButton>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })}

                            </MKBox>
                        </Container>
                    </Card>
                </MKBox>
            </MKBox>
        </>
    );
};

export default OwnerDogRequestsForm;