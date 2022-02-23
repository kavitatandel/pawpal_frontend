import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Card from "@mui/material/Card";
import MKButton from "../MKButton";
import MKAvatar from "components/MKAvatar";

// import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";
//import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

const SearchedDog = ({ locations, setLocations }) => {

    const navigate = useNavigate();

    return (
        <>
            {/* map thru searched dogs */}
            {locations && locations.map((dog, index) => {
                return (
                    <Card style={{ width: "95%", height: "5rem", marginBottom: "1rem" }}>
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
                                    src={`${dog.dogs_info.profile_photo}`}
                                    alt={`${dog.dogs_info.name}`}
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
                                    {dog.dogs_info.name}
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
                                    {dog.dogs_info.breed}
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
                                {/* <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
                                    {dog.dogs_info.age_years} yrs {dog.dogs_info.age_months} mon.
                                </MKTypography> */}
                                <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
                                    {dog.dogs_info.size}
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
                                    onClick={() => navigate(`/doginfo/${dog.dogs_info._id}`)}>
                                    Info
                                </MKButton>
                            </div>
                        </div>
                    </Card>
                )
            })}



            {/* <Grid container width="100%">

                <Grid item xs={12} lg={6} sx={{ mt: { xs: 6, lg: 0 } }}>
                    <Stack>
                        <MKBox display="flex" alignItems="center" pt={2}>
                            <MKBox
                                width="100%"
                                height="3rem"
                                variant="gradient"
                                bgColor="info"
                                color="white"
                                coloredShadow="info"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="xl"
                            >
                                <Icon fontSize="small">mediation</Icon>
                            </MKBox>
                            <MKTypography variant="body2" color="text" pl={2}>
                                {locations[0].dogs_info.name} {locations[0].dogs_info.breed}
                            </MKTypography>
                        </MKBox>
                        <MKBox display="flex" alignItems="center" p={2}>
                            <MKBox
                                width="3rem"
                                height="3rem"
                                variant="gradient"
                                bgColor="info"
                                color="white"
                                coloredShadow="info"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="xl"
                            >
                                <Icon fontSize="small">settings_overscan</Icon>
                            </MKBox>
                            <MKTypography variant="body2" color="text" pl={2}>
                                As we live, our hearts turn colder.
                                <br />
                                Cause pain is what we go through as we become older.
                            </MKTypography>
                        </MKBox>
                        <MKBox display="flex" alignItems="center" p={2}>
                            <MKBox
                                width="3rem"
                                height="3rem"
                                variant="gradient"
                                bgColor="info"
                                color="white"
                                coloredShadow="info"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="xl"
                            >
                                <Icon fontSize="small">token</Icon>
                            </MKBox>
                            <MKTypography variant="body2" color="text" pl={2}>
                                When we lose family over time.
                                <br />
                                What else could rust the heart more over time? Blackgold.
                            </MKTypography>
                        </MKBox>
                    </Stack>
                </Grid> */}

            {/* {locations.map((dog, index) => {
                    return (
                        <TransparentBlogCard
                            image="https://bit.ly/3HH2M6E"
                            //image={`${dog.dogs_info.profile_photo}`}
                            title="MateLabs mixes machine learning with IFTTT"
                            description="If you've ever wanted to train a machine learning model and integrate it with IFTTT, you now can with ..."
                            action={{
                                type: "internal",
                                route: "/users/doginfo",
                                color: "info",
                                label: `Read more info abour ${dog.dogs_info.name}`,
                            }}

                        />
                    )
                })} */}


            {/* </Grid> */}


        </>
    )
}
export default SearchedDog;