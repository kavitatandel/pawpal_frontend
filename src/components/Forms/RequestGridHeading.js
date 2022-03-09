import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "../MKTypography";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InfoIcon from "@mui/icons-material/Info";
import { neumorphic } from "styles/CustomStyles";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";

const RequestGridHeading = () => {
    return (
        <>
            <Grid
                container
                sx={{
                    // padding: "1rem",
                    padding: "1rem 1rem 0rem 1rem",

                    display: "flex",
                    justifyContent: "center",
                    mb: "0rem",
                }}
            >
                <MKBox
                    sx={{ width: { xs: "95%", xxl: "90%" } }}
                    style={{
                        display: "flex",
                        height: "auto",
                        flexDirection: "column",
                        alignItems: "center",

                        // border: "3px solid blue",
                    }}
                >

                    <Card sx={neumorphic} >
                        <MKBox
                            className="mainContainer"
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: "1rem,",
                                minHeight: "5rem",
                                paddingLeft: {
                                    sx: "0.5rem",
                                    sm: "1rem",
                                    md: "2rem",
                                    lg: "2.5rem",
                                },
                                paddingRight: {
                                    sx: "1rem",
                                    sm: "1.5rem",
                                    md: "2rem",
                                },
                            }}
                        >
                            <MKBox
                                className="Avatar"
                                sx={{
                                    width: { sm: "15%", md: "14%", lg: "12%" },
                                    display: { md: "flex" },
                                    minWidth: "3.2rem",

                                    mr: "1rem",
                                }}
                                style={{
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <MKAvatar
                                    top={-50}
                                    zIndex={2}
                                    src=''
                                    alt='H'
                                    shadow="xl"
                                    sx={{ width: "2.5rem", height: "2.5rem" }}
                                    style={{
                                        border: "3.2px solid white",
                                        marginRight: "1rem",
                                    }}
                                >
                                    <img
                                        src={HumanAvatar}
                                        alt="avatar"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                </MKAvatar>
                            </MKBox>

                            {/* *************** DOGLOVER NAME */}
                            <MKBox
                                className="DogLoverName"
                                sx={{
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    width: { sm: "25%", md: "20%", lg: "16%" },
                                    display: { sm: "flex" },
                                }}
                            >
                                <MKTypography
                                    variant="p"
                                    fontWeight="medium"
                                    style={{ fontSize: "0.90rem", color: "blue" }}
                                >
                                    Requester Name
                                </MKTypography>
                            </MKBox>
                            {/* *************** DOG NAME */}
                            <MKBox
                                className="DogName"
                                sx={{
                                    width: { sm: "25%", md: "20%", lg: "16%" },
                                    display: { xs: "none", sm: "flex" },
                                }}
                                style={{
                                    fontSize: "0.8rem",

                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <MKTypography variant="p" fontWeight="medium" style={{ fontSize: "0.90rem", color: "blue" }}>
                                    Dog Name
                                </MKTypography>
                            </MKBox>
                            {/* *************** START DATE */}
                            <MKBox
                                className="Size"
                                sx={{
                                    width: { md: "20%", lg: "16%" },
                                    display: { xs: "none", md: "flex" },
                                }}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <MKTypography variant="p" fontWeight="medium" style={{ fontSize: "0.90rem", color: "blue" }}>
                                    Date
                                </MKTypography>
                            </MKBox>
                            {/* *************** START TIME */}
                            <MKBox
                                className="StartTime"
                                sx={{
                                    width: { lg: "16%" },
                                    display: { xs: "none", lg: "flex" },
                                }}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            >

                                <MKTypography variant="p" fontWeight="medium" style={{ fontSize: "0.90rem", color: "blue" }}>
                                    Start Time
                                </MKTypography>
                            </MKBox>
                            {/* *************** END TIME */}
                            <MKBox
                                className="EndTime"
                                sx={{
                                    width: { lg: "16%" },
                                    display: { xs: "none", lg: "flex" },
                                }}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <MKTypography variant="p" fontWeight="medium" style={{ fontSize: "0.90rem", color: "blue" }}>
                                    End Time
                                </MKTypography>
                            </MKBox>
                            <MKBox
                                className="EndTime"
                                sx={{
                                    width: { lg: "16%" },
                                    display: { xs: "none", lg: "flex" },
                                }}
                                style={{
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <MKTypography variant="p" fontWeight="medium" style={{ fontSize: "0.90rem", color: "blue" }}>

                                </MKTypography>
                            </MKBox>

                            {/* <MKBox
                                className="ButtonContainer"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-end ",
                                    //   border: "2px solid red",

                                    width: { md: "20%", lg: "12%" },
                                    marginRight: "1rem",
                                }}
                            >
                                <MKButton
                                    size="large"
                                    type="submit"
                                    variant="gradient"
                                    color="info"
                                    sx={{
                                        minWidth: {
                                            xs: "2rem",
                                            sm: "2rem",
                                            md: "2.5rem",
                                            lg: "3rem",
                                        },
                                        minHeight: {
                                            xs: "2rem",
                                            sm: "2rem",
                                            md: "2.5rem",
                                            lg: "3rem",
                                        },

                                        padding: {
                                            xs: "10px 10px",
                                            md: "12px 12px",
                                            lg: "10px 10px",
                                            xl: "8px 8px",
                                            xxl: "8px 8px",
                                            xxxl: "4px 4px",
                                        },

                                        ml: "1rem",
                                    }}
                                    value={request._id}
                                    onClick={handleInfo}
                                >                                  
                                    INFO                                   
                                </MKButton>
                            </MKBox> */}
                        </MKBox>
                    </Card>

                </MKBox>
            </Grid>
        </>
    )
}

export default RequestGridHeading;