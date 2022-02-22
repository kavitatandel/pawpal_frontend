import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// import DefaultBlogCard from "examples/Cards/BlogCards/DefaultBlogCard";
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

const SearchedDog = ({ locations, setLocations }) => {
    return (
        <>
            <Grid container width="100%">

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
                </Grid>

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


            </Grid>


        </>
    )
}
export default SearchedDog;