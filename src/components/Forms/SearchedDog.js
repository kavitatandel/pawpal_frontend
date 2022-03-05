import { useNavigate } from "react-router-dom";
import { glassStyle } from "styles/CustomStyles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import InfoIcon from "@mui/icons-material/Info";
import { styled } from "@mui/material/styles";
import DogAvatar from "../../assets/images/avatars/dog-av-grad.png";

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
      <MKBox
        sx={{ display: { xs: "none", sm: "flex" } }}
        style={{
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "1rem",
          // border: "3px solid blue",
        }}
      >
        {locations &&
          locations.map((dog, index) => {
            return (
              <Card style={glassStyle}>
                <MKBox
                  className="mainContainer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    padding: "0rem",
                  }}
                >
                  <MKBox
                    className="Avatar"
                    sx={{
                      width: { sm: "33%", md: "25%", lg: "20%" },
                      display: { sm: "none", md: "flex" },
                      minWidth: "3.2rem",
                    }}
                    style={{
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <MKAvatar
                      src={`${dog.dogs_info.profile_photo}`}
                      alt={`${dog.dogs_info.name}`}
                      shadow="xl"
                      sx={{ width: "2.5rem", height: "2.5rem" }}
                      style={{
                        border: "3.2px solid white",
                        marginRight: "1rem",
                      }}
                    >
                      <img
                        src={DogAvatar}
                        alt="avatar"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </MKAvatar>
                  </MKBox>
                  <MKBox
                    className="DogName"
                    style={{
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: { sm: "33%", md: "25%", lg: "20%" },
                      display: { xs: "none", sm: "flex" },
                    }}
                    sx={{
                      width: { sm: "33%", md: "25%", lg: "20%" },
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    <MKTypography
                      variant="p"
                      fontWeight="medium"
                      style={{ fontSize: "0.90rem" }}
                    >
                      {dog.dogs_info.name}
                    </MKTypography>
                  </MKBox>
                  <MKBox
                    className="DogType"
                    sx={{
                      width: { md: "25%", lg: "20%" },
                      display: { sm: "none", md: "flex" },
                    }}
                    style={{
                      fontSize: "0.8rem",

                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
                      {dog.dogs_info.breed}
                    </MKTypography>
                  </MKBox>
                  <MKBox
                    className="Size"
                    sx={{
                      width: { lg: "20%" },
                      display: { xs: "none", lg: "flex" },
                    }}
                    style={{
                      alignItems: "center",
                      justifyContent: "flex-end",
                    }}
                  >
                    <MKTypography variant="p" style={{ fontSize: "0.90rem" }}>
                      {dog.dogs_info.size}
                    </MKTypography>
                  </MKBox>
                  <MKBox
                    className="ButtonContainer"
                    sx={{
                      width: { sm: "33%", md: "25%", lg: "20%" },
                      display: { xs: "none", sm: "flex" },
                      alignItems: "center",
                      justifyContent: "flex-end ",
                    }}
                  >
                    <MKButton
                      size="large"
                      type="submit"
                      variant="gradient"
                      color="info"
                      style={{
                        width: { sm: "1rem", md: "2rem" },
                        height: { sm: "1rem", md: "2rem" },
                        minWidth: "1rem",
                        minHeight: "1rem",
                        padding: "5px 5px",
                      }}
                      onClick={() => navigate(`/doginfo/${dog.dogs_info._id}`)}
                    >
                      <InfoIcon fontSize="inherit" />
                    </MKButton>
                  </MKBox>
                </MKBox>
              </Card>
            );
          })}
      </MKBox>
    </>
  );
};
export default SearchedDog;
