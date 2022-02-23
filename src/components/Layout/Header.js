import { useLocation, useParams, Link } from "react-router-dom";

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

  return (
    <MKBox
      component="header"
      position="relative"
      height="100%"
      style={{ zIndex: 2 }}
    >
      <MKBox
        component="nav"
        position="absolute"
        top="0"
        width="100%"
        style={{ zIndex: 2 }}
      >
        <div
          style={{
            marginTop: "2rem",
            zIndex: 2,
            display: "flex",
            width: "100%",
            height: "auto",
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
              mx={12}
            >
              LOGO HERE
            </MKTypography>
          </Link>

          <MKBox
            component="ul"
            display="flex"
            justifyContent="flex-end"
            p={0}
            my={0}
            mx={8}
            sx={{ listStyle: "none" }}
          >
            <Link to="/">
              <MKTypography
                fontSize="1.1rem"
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

            <Link to="/user">
              <MKTypography
                p={1}
                fontWeight="regular"
                style={{
                  fontSize: "1.1rem",
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
                  fontSize: "1.1rem",
                  paddingRight: "2rem",
                  paddingLeft: "2rem",
                  color: pathname === "/something" ? "dark" : "white",
                }}
              >
                Search Dogs
              </MKTypography>
            </Link>
          </MKBox>
        </div>
      </MKBox>
    </MKBox>
  );
};

export default Header;
