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
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox component="nav" position="absolute" top="0.5rem" width="100%">
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100px",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <MKTypography
            component={Link}
            href="#"
            variant="button"
            color="white"
            fontSize="1rem"
            fontWeight="medium"
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
              color="white"
              fontSize="1.1rem"
              fontWeight="regular"
              p={1}
              style={{ paddingRight: "2rem", paddingLeft: "2rem" }}
              onClick={(e) => e.preventDefault()}
            >
              Home
            </MKTypography>

            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontSize="1.1rem"
              fontWeight="regular"
              p={1}
              style={{ paddingRight: "2rem", paddingLeft: "2rem" }}
              onClick={(e) => e.preventDefault()}
            >
              About Us
            </MKTypography>

            <MKTypography
              component={Link}
              href="#"
              variant="button"
              color="white"
              fontSize="1.1rem"
              fontWeight="regular"
              p={1}
              style={{ paddingRight: "2rem", paddingLeft: "2rem" }}
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
