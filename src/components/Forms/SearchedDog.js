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
import { useEffect, useState } from "react";
//for spinner
import RiseLoader from "react-spinners/RiseLoader";
import { override } from "styles/CustomStyles";

const SearchedDog = ({ locations, setLocations, isSearched, noData }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ff3d47");

  useEffect(() => {
    console.log(locations);
    if (isSearched == false) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {locations.length < 1 ? (
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
              className="DogName"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <MKTypography
                fontFamily="nunito"
                variant="p"
                fontWeight="medium"
                style={{ fontSize: "0.90rem" }}
              >
                No Dogs Found.
              </MKTypography>
            </MKBox>
          </MKBox>
        </Card>
      ) : (
        <>
          {locations &&
            locations.map((dog) => {
              return (
                <Card
                  style={glassStyle}
                  key={dog.dogs_info._id}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <MKBox
                    className="mainContainer"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignContent: "center",
                      padding: "0rem",
                      // border: "2px solid yellow",
                      minHeight: "50px",
                    }}
                    sx={{ display: { sm: "none", md: "flex" } }}
                  >
                    <MKBox
                      className="Avatar"
                      sx={{
                        width: { sm: "50%", md: "40%", lg: "15%" },
                        display: { xs: "none", sm: "flex" },
                        minWidth: "3rem",
                        // border: "1px solid blue",
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
                      }}
                      sx={{
                        width: { sm: "60%", md: "45%", lg: "30%" },
                        display: { xs: "none", sm: "flex" },
                        // border: "1px solid blue",
                      }}
                    >
                      <MKTypography
                        variant=" subtitle2"
                        style={{ fontSize: "1.1rem" }}
                        fontWeight="medium"
                      >
                        {dog.dogs_info.name}
                      </MKTypography>
                    </MKBox>
                    <MKBox
                      className="DogType"
                      sx={{
                        width: { sm: "60%", md: "45%", lg: "35%" },
                        display: { xs: "none", lg: "flex" },
                      }}
                      style={{
                        fontSize: "0.8rem",

                        alignItems: "center",
                        justifyContent: "flex-start",
                        // border: "1px solid blue",
                      }}
                    >
                      <MKTypography
                        variant=" subtitle2"
                        style={{ fontSize: "0.9rem" }}
                        fontFamily="nunito"
                      >
                        {dog.dogs_info.breed}
                      </MKTypography>
                    </MKBox>
                    <MKBox
                      className="Size"
                      sx={{
                        width: { md: "45%", lg: "10%" },
                        display: { xs: "none", xl: "flex" },
                      }}
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        // border: "1px solid blue",
                      }}
                    >
                      <MKTypography
                        variant=" subtitle2"
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 600,
                          textTransform: "capitalize",
                        }}
                      >
                        {dog.dogs_info.size[0]}
                      </MKTypography>
                    </MKBox>
                    <MKBox
                      className="ButtonContainer"
                      sx={{
                        width: { sm: "20%", lg: "10%" },
                        display: { xs: "none", sm: "flex" },
                        alignItems: "center",
                        justifyContent: "flex-end",
                        // border: "1px solid blue",
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
                        onClick={() =>
                          navigate(`/doginfo/${dog.dogs_info._id}`)
                        }
                      >
                        <InfoIcon fontSize="inherit" />
                      </MKButton>
                    </MKBox>
                  </MKBox>
                </Card>
              );
            })}
        </>
      )}
    </>
  );
};
export default SearchedDog;
