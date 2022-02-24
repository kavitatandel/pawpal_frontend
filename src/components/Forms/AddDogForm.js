import { useEffect, useState, useContext } from "react";
import { UserContext } from "context/UserContext";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";
import MKBox from "components/MKBox";
//import MKAvatar from "components/MKAvatar";
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
import { addDog } from "../../logic/DogFunctions";
import { useNavigate } from "react-router";


const AddDogForm = () => {
    const [user, setUser] = useContext(UserContext);
    const [dogName, setDogName] = useState('');
    const [dogBreed, setDogBreed] = useState('');
    const [dogAgeYears, setDogAgeYears] = useState(0);
    const [dogAgeMonths, setDogAgeMonths] = useState(0);
    const [dogSize, setDogSize] = useState('small');
    const [dogEnergy, setDogEnergy] = useState('low');
    const [dogCanPlay, setDogCanPlay] = useState(true);
    const [dogKidFriendly, setDogKidFriendly] = useState(3);
    const [dogCatFriendly, setDogCatFriendly] = useState(3);
    const [dogFriendly, setDogFriendly] = useState(3);
    const [dogObedience, setDogObedience] = useState(3);
    const [dogCanStayHome, setDogCanStayHome] = useState(3);
    const [dogExercise, setDogExercise] = useState(3);
    const [dogDescription, setDogDescription] = useState('');

    const navigate = useNavigate();

    //for radio group
    const handleChangeSize = (e) => {
        setDogSize(e.target.value);
    }

    //for energy radio group
    const handleChangeEnergy = (e) => {
        setDogEnergy(e.target.value);
    }

    //for can play fetch
    const handleCanPlay = (e) => {
        setDogCanPlay(e.target.value);
    }

    const handleChangeKidFreindly = (event, newValue) => {
        setDogKidFriendly(newValue);
    };

    const handleChangeDogCatFreindly = (event, newValue) => {
        setDogCatFriendly(newValue);
    };

    const handleChangeDogFreindly = (event, newValue) => {
        setDogFriendly(newValue);
    };

    const handleChangeDogObedience = (event, newValue) => {
        setDogObedience(newValue);
    };

    const handleChangeDogCanStayHome = (event, newValue) => {
        setDogCanStayHome(newValue);
    };

    const handleChangeDogExercise = (event, newValue) => {
        setDogExercise(newValue);
    };

    //add dog
    const addNewDog = async (e) => {
        e.preventDefault();

        const newDog = {
            user_id: user._id,
            name: dogName,
            breed: dogBreed,
            age_years: dogAgeYears,
            age_months: dogAgeMonths,
            size: dogSize,
            description: dogDescription,
            energy: dogEnergy,
            kid_friendly: dogKidFriendly,
            cat_friendly: dogCatFriendly,
            dog_friendly: dogFriendly,
            obedience: dogObedience,
            can_stay_home: dogCanStayHome,
            exercise_type: dogExercise,
            can_play_fetch: dogCanPlay,
            // photo_gallery: req.body.photo_gallery,
            // pd_counter: req.body.pd_counter
        }

        //console.log(newDog);

        await addDog(newDog).then((res) => {
            navigate('/user')
        })
            .catch((err) => console.log(err));
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
                        <Container>
                            {/* ************************** Dog Details */}
                            <MKBox pt={1} pb={3} px={3}>
                                <MKBox
                                    component="form"
                                    method="post"
                                    autocomplete="off"
                                    role="form"
                                    onSubmit={addNewDog}
                                    p={6}
                                >
                                    <MKBox mb={2} display="flex" justifyContent="space-between">
                                        <MKInput
                                            label="Name"
                                            fullWidth
                                            type="text"
                                            name="name"
                                            value={dogName}
                                            placeholder="Enter dog name"
                                            required
                                            // onChange={(e) =>
                                            //     setDog({ ...dog, dogname: e.target.value })
                                            // }
                                            onChange={(e) => setDogName(e.target.value)}
                                            style={{ width: "48%" }}
                                        />

                                        <MKInput
                                            fullWidth
                                            style={{ width: "48%" }}
                                            label="Breed"
                                            type="text"
                                            name="breed"
                                            placeholder="Enter breed"
                                            required
                                            value={dogBreed}
                                            // onChange={(e) =>
                                            //     setDog({ ...dog, breed: e.target.value })
                                            // }
                                            onChange={(e) => setDogBreed(e.target.value)}
                                        />
                                    </MKBox>
                                    <MKBox mb={2} display="flex" justifyContent="space-between">
                                        <MKInput
                                            fullWidth
                                            label="Age Years"
                                            name="age_years"
                                            placeholder="Enter age in years"
                                            type="text"
                                            value={dogAgeYears}
                                            // onChange={(e) =>
                                            //     setDog({ ...dog, age_years: e.target.value })
                                            // }
                                            onChange={(e) => setDogAgeYears(e.target.value)}
                                            style={{ width: "30%" }}
                                        />
                                        <MKInput
                                            fullWidth
                                            label="Age Months"
                                            name="age_months"
                                            placeholder="Enter age in months"
                                            type="text"
                                            value={dogAgeMonths}
                                            // onChange={(e) =>
                                            //     setDog({ ...dog, age_months: e.target.value })
                                            // }
                                            onChange={(e) => setDogAgeMonths(e.target.value)}
                                            style={{ width: "30%" }}
                                        />

                                        <FormControl>
                                            <FormLabel
                                                style={{ fontSize: "0.70em", color: "Gray" }}
                                                size="small"
                                            >
                                                Size
                                            </FormLabel>
                                            <RadioGroup
                                                name="controlled-radio-buttons-group"
                                                //value={user.user_type}
                                                value={dogSize}
                                                onChange={handleChangeSize}
                                                size="small"
                                                row

                                            >
                                                <FormControlLabel
                                                    value="small"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="Small"
                                                />
                                                <FormControlLabel
                                                    value="medium"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="Medium"
                                                />
                                                <FormControlLabel
                                                    value="large"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="Large"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </MKBox>
                                    <MKBox mb={2} display="flex" justifyContent="flex-start">
                                        <FormControl>
                                            <FormLabel
                                                style={{ fontSize: "0.70em", color: "Gray" }}
                                                size="small"
                                            >
                                                Energy
                                            </FormLabel>
                                            <RadioGroup
                                                name="controlled-radio-buttons-group"
                                                //value={user.user_type}
                                                value={dogEnergy}
                                                onChange={handleChangeEnergy}
                                                size="small"
                                                row

                                            >
                                                <FormControlLabel
                                                    value="low"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="low"
                                                />
                                                <FormControlLabel
                                                    value="medium"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="Medium"
                                                />
                                                <FormControlLabel
                                                    value="high"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="High"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                        <FormControl style={{ paddingLeft: "8%" }}>
                                            <FormLabel
                                                style={{ fontSize: "0.70em", color: "Gray" }}
                                                size="small"
                                            >
                                                Can Play Fetch
                                            </FormLabel>
                                            <RadioGroup
                                                name="controlled-radio-buttons-group"
                                                //value={user.user_type}
                                                value={dogCanPlay}
                                                onChange={handleCanPlay}
                                                size="small"
                                                row

                                            >
                                                <FormControlLabel
                                                    value="true"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="Yes"
                                                />
                                                <FormControlLabel
                                                    value="false"
                                                    control={
                                                        <Radio
                                                            size="small"
                                                            style={{ fontSize: "0.70em" }}
                                                        />
                                                    }
                                                    label="No"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </MKBox>
                                    <MKBox mb={2} display="flex" justifyContent="space-between">
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Kid Friendly (1- 5)</MKTypography>
                                            <Slider defaultValue={3}
                                                value={dogKidFriendly}
                                                onChange={handleChangeKidFreindly}
                                                min={1}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Cat Friendly (1- 5)</MKTypography>
                                            <Slider defaultValue={3}
                                                value={dogCatFriendly}
                                                onChange={handleChangeDogCatFreindly}
                                                min={1}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Dog Friendly (1- 5)</MKTypography>
                                            <Slider defaultValue={3}
                                                value={dogFriendly}
                                                onChange={handleChangeDogFreindly}
                                                min={1}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                    </MKBox>
                                    <MKBox mb={2} display="flex" justifyContent="space-between">

                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Obedience (1- 5)</MKTypography>
                                            <Slider defaultValue={3}
                                                value={dogObedience}
                                                onChange={handleChangeDogObedience}
                                                min={1}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>

                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Can Stay Home (1- 5)</MKTypography>
                                            <Slider defaultValue={3}
                                                value={dogCanStayHome}
                                                onChange={handleChangeDogCanStayHome}
                                                min={1}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                        <MKBox sx={{ width: 280 }}>
                                            <MKTypography gutterBottom style={{ fontSize: "0.70em", color: "Gray" }}>Can Exercise (1- 5)</MKTypography>
                                            <Slider defaultValue={3}
                                                value={dogExercise}
                                                onChange={handleChangeDogExercise}
                                                min={1}
                                                max={5}
                                                size="medium"
                                            />
                                        </MKBox>
                                    </MKBox>
                                    <MKBox mb={2} zindex={2}>
                                        <MKInput

                                            multiline fullWidth rows={6}
                                            label="Description"
                                            type="text"
                                            name="description"
                                            placeholder="Enter Description"
                                            value={dogDescription}
                                            // onChange={(e) =>
                                            //     setDog({ ...dog, description: e.target.value })
                                            // }
                                            onChange={(e) => setDogDescription(e.target.value)}
                                        />
                                    </MKBox>
                                    <MKBox mb={2} display="flex" justifyContent="center">
                                        <MKButton
                                            size="large"
                                            type="submit"
                                            variant="gradient"
                                            color="info"
                                            style={{
                                                marginLeft: "1.5rem",
                                                width: "8rem",
                                                minWidth: "120px",
                                            }}
                                        >
                                            Save
                                        </MKButton>
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

export default AddDogForm;