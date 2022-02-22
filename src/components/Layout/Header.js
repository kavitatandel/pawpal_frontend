import { useLocation, useParams } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
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
        top="0rem"
        width="100%"
        style={{ zIndex: 2 }}
      >
        <div
          style={{
            zIndex: 2,
            display: "flex",
            width: "100%",
            height: "100px",
            alignItems: "center",
            justifyContent: "space-around",

            boxShadow:
              pathname === "/something"
                ? "0rem 0.25rem 0.375rem -0.0625rem rgb(0 0 0 / 10%), 0rem 0.125rem 0.25rem -0.0625rem rgb(0 0 0 / 6%)"
                : "none",
          }}
        >
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            fontWeight="medium"
            style={{
              color: pathname === "/user/searchdog" ? "dark" : "white",
              fontSize: "1rem",
            }}
            py={0.8125}
            mx={12}
          >
            LOGO HERE
          </MKTypography>

          <MKBox
            component="ul"
            display="flex"
            justifyContent="flex-end"
            p={0}
            my={0}
            mx={8}
            sx={{ listStyle: "none" }}
          >
            <MKTypography
              component={Link}
              href="#"
              variant="button"
              fontSize="1.1rem"
              fontWeight="regular"
              p={1}
              style={{
                paddingRight: "2rem",
                paddingLeft: "2rem",

                color: pathname === "/user/searchdog" ? "dark" : "white",
              }}
              onClick={(e) => e.preventDefault()}
            >
              Home
            </MKTypography>

            <MKTypography
              component={Link}
              href="#"
              variant="button"
              p={1}
              fontWeight="regular"
              style={{
                fontSize: "1.1rem",

                paddingRight: "2rem",
                paddingLeft: "2rem",
                color: pathname === "/user/searchdog" ? "dark" : "white",
              }}
              onClick={(e) => e.preventDefault()}
            >
              About Us
            </MKTypography>

            <MKTypography
              component={Link}
              href="#"
              variant="button"
              p={1}
              fontWeight="regular"
              style={{
                fontSize: "1.1rem",

                paddingRight: "2rem",
                paddingLeft: "2rem",
                color: pathname === "/user/searchdog" ? "dark" : "white",
              }}
              onClick={(e) => e.preventDefault()}
            >
              Contact Us
            </MKTypography>
          </MKBox>
        </div>
      </MKBox>
    </MKBox>
  );
};

export default Header;
