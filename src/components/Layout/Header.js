import { useLocation, useParams, Link } from "react-router-dom";
import { UserContext } from "context/UserContext";
import { useContext } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const Header = () => {
  const { pathname } = useLocation();
  // const { pathname } = useParams();
  const [user, setUser] = useContext(UserContext);

  const handleLagOut = () => {
    setUser({});
    localStorage.removeItem("usertoken");
  };

  return (
    <MKBox
      component="header"
      position="relative"
      style={{ zindex: 4, backgroundColor: "black" }}
    >
      <MKBox
        component="nav"
        position="absolute"
        top="0"
        width="auto"
        style={{ zindex: 2 }}
      >
        <div
          style={{
            marginTop: "2rem",
            zindex: 2,
            display: "flex",
            width: "auto",
            // height: "auto",
            alignItems: "center",
            justifyContent: "space-between",

            boxShadow:
              pathname === "/something"
                ? "0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 10%), 0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 / 6%)"
                : "none",
          }}
        >
          <Link to="/">
            <MKTypography
              fontWeight="bold"
              style={{
                color: pathname === "/something" ? "dark" : "white",
                fontSize: "1rem",
              }}
              py={0.8125}
              ml={10}
            >
              LOGO HERE
            </MKTypography>
          </Link>
          <Grid container spacing={2} style={{}}>
            <MKBox
              component="ul"
              display="flex"
              justifyContent="flex-end"
              p={0}
              my={0}
              mx={8}
              sx={{ listStyle: "none" }}
            >
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="flex-end"
              >
                <Link to="/">
                  <MKTypography
                    fontSize="1rem"
                    fontWeight="regular"
                    p={1}
                    style={{
                      paddingRight: "2rem",
                      paddingLeft: "2rem",
                      color: pathname === "/something" ? "dark" : "white",
                    }}
                  >
                    Home
                  </MKTypography>
                </Link>
              </Grid>

              <Link to="/user">
                <MKTypography
                  p={1}
                  fontWeight="regular"
                  style={{
                    fontSize: "1rem",
                    paddingRight: "2rem",
                    paddingLeft: "2rem",
                    color: pathname === "/something" ? "dark" : "white",
                  }}
                >
                  My Profile
                </MKTypography>
              </Link>
              <Link to="/user/searchdog">
                <MKTypography
                  p={1}
                  fontWeight="regular"
                  style={{
                    fontSize: "1rem",
                    paddingRight: "2rem",
                    paddingLeft: "2rem",
                    color: pathname === "/something" ? "dark" : "white",
                  }}
                >
                  Search Dogs
                </MKTypography>
              </Link>
              <Link to="/owner/ownerdogs">
                <MKTypography
                  p={1}
                  fontWeight="regular"
                  style={{
                    fontSize: "1rem",
                    paddingRight: "2rem",
                    paddingLeft: "2rem",
                    color: pathname === "/something" ? "dark" : "white",
                  }}
                >
                  My Dogs
                </MKTypography>
              </Link>
              {/* <Link to="/" onClick={() => setUser({})}> */}
              <Link to="/" onClick={handleLagOut}>
                {/* <MKButton onClick={() => setUser({})}> */}
                <MKTypography
                  mr={5}
                  p={1}
                  fontWeight="regular"
                  style={{
                    fontSize: "1rem",
                    paddingRight: "2rem",
                    paddingLeft: "2rem",
                    color: pathname === "/something" ? "dark" : "white",
                    //color: "dark",
                  }}
                >
                  Log Out
                </MKTypography>
                {/* </MKButton> */}
              </Link>
            </MKBox>
          </Grid>
        </div>
      </MKBox>
    </MKBox>
  );
};

export default Header;
