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
import Slider from '@mui/material/Slider';

//for radio button
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { getDogInfoById } from "../../logic/DogFunctions";
import { useNavigate, useParams } from "react-router";

const DogInfoForm = () => {
    const [user, setUser] = useContext(UserContext);
    const [dogInfo, setDogInfo] = useState('');
    const [dogKidFriendly, setDogKidFriendly] = useState(0);
    const [dogCatFriendly, setDogCatFriendly] = useState(0);

    const navigate = useNavigate();

    const { dogid } = useParams();
    console.log(dogid);

    useEffect(async () => {
        console.log(user);
        await getDogInfoById(dogid).then((res) => {
            console.log(res)
            setDogInfo(res);
            setDogKidFriendly(res.kid_friendly);
            console.log("Kid Friendly")
            console.log(res.kid_friendly)
        })
            .catch((err) => console.log(err));
    }, [])

    const handleChangeKidFreindly = (event, newValue) => {
        setDogKidFriendly(newValue);
    };

    const handleChangeDogCatFreindly = (event, newValue) => {
        setDogCatFriendly(newValue);
    };

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
                        {/* Container for Profile Pic */}
                        <MKBox
                            zindex={2}
                            mx={4}
                            mt={-15}
                            mb={4}
                            pt={5}
                            display="flex"
                            justifyContent="center"
                            alignItems="flex-end"
                        //   style={{ border: "3px solid blue" }}
                        >
                            {/* dog pic */}
                            <MKAvatar
                                top={-50}
                                zindex={2}
                                src={`${dogInfo.profile_photo}`}
                                alt={`${dogInfo.name}`}
                                shadow="xl"
                                sx={{ width: "10rem", height: "10rem" }}
                                style={{ border: "3px solid white", backgroundColor: "grey" }}
                            />
                        </MKBox>
                        <Container>
                            <MKTypography
                                variant="h3"
                                fontWeight="medium"
                                color="dark"
                                textAlign="center"
                            >
                                {`${dogInfo.name}`}
                            </MKTypography>
                            {/* ************************** Dog Details */}
                            <MKBox pt={1} pb={3} px={3}>
                                <MKBox
                                    component="form"
                                    method="post"
                                    autocomplete="off"
                                    role="form"

                                    p={6}
                                >
                                    <MKBox mb={2} display="flex" justifyContent="space-between">
                                        <MKTypography
                                            color="dark"
                                            textAlign="center"
                                        >
                                            Breed:
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            {`${dogInfo.breed}`}
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            Age:
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            {`${dogInfo.age_years}`} yrs.    {`${dogInfo.age_months}`} months
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            Size:
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            {`${dogInfo.size}`}
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            Energy:
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            {`${dogInfo.energy}`}
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            Can Play Fetch:
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            {(dogInfo.can_play_fetch) ? `Yes` : `No`}
                                        </MKTypography>
                                    </MKBox>

                                    <MKBox mb={2} display="flex" justifyContent="space-between">
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Kid Friendly (0 - 5)`{dogInfo.kid_friendly}`</MKTypography>
                                            {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
                                            <Slider disabled defaultValue={3} value={3}
                                                min={0} max={5}

                                                aria-label="Disabled slider" />
                                            {/* <Slider
                                                //defaultValue={4}
                                                defaultValue={dogInfo.kid_friendly}
                                                // value={dogInfo.cat_friendly}
                                                // onChange={handleChangeDogCatFreindly}
                                                min={0}
                                                max={5}
                                                disabled
                                                size="medium"
                                                aria-label="Disabled slider"
                                            /> */}
                                        </MKBox>
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Cat Friendly (0 - 5)</MKTypography>
                                            <Slider
                                                //defaultValue={4}
                                                defaultValue={dogInfo.cat_friendly}
                                                // value={dogInfo.cat_friendly}
                                                // onChange={handleChangeDogCatFreindly}
                                                min={0}
                                                max={5}
                                                disabled
                                                size="medium"
                                                aria-label="Disabled slider"
                                            />
                                        </MKBox>
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Dog Friendly (0 - 5)</MKTypography>
                                            <Slider defaultValue={0}
                                                value={dogInfo.dog_friendly}

                                                min={0}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                    </MKBox>
                                    <MKBox mb={2} display="flex" justifyContent="space-between">

                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Obedience (0 - 5)</MKTypography>
                                            <Slider defaultValue={0}
                                                value={dogInfo.obedience}
                                                min={0}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>

                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Can Stay Home (0 - 5)</MKTypography>
                                            <Slider defaultValue={0}
                                                value={dogInfo.can_stay_home}
                                                min={0}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Can Exercise (0 - 5)</MKTypography>
                                            <Slider defaultValue={0}
                                                value={dogInfo.exercise_type}

                                                min={0}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                    </MKBox>
                                    <MKBox mb={2} zindex={2} display="flex" justifyContent="flex-start" >
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            Description:
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            {`${dogInfo.description}`}
                                        </MKTypography>

                                    </MKBox>
                                    <MKBox mb={2} zindex={2} display="flex" justifyContent="flex-start" >
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            Address:
                                        </MKTypography>
                                        <MKTypography
                                            fontWeight="small"
                                            color="dark"
                                            textAlign="center"
                                        >
                                            {`${user.street} ${user.zip_code}, ${user.city}, ${user.country}`}
                                        </MKTypography>

                                    </MKBox>
                                </MKBox>
                            </MKBox>
                        </Container>
                    </Card>
                </MKBox>
            </MKBox>

        </>
    );
};

export default DogInfoForm;