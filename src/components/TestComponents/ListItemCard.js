// @mui material components
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "../MKInput";
import MKButton from "../MKButton";
import MKTypography from "../MKTypography";
import MKAvatar from "components/MKAvatar";

const ListItemCard = () => {
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
            marginLeft: "1rem",
          }}
        >
          <MKAvatar
            top={-50}
            zIndex={2}
            // Hard coded for now
            src="https://res.cloudinary.com/kavita-project/image/upload/v1645350736/lqhvjqlevlaqxpzw7hqq.png"
            alt="Burce Mars"
            shadow="xl"
            sx={{ width: "3.2rem", height: "3.2rem" }}
            style={{ border: "3.2px solid white" }}
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
            style={{ fontSize: "1rem" }}
          >
            Dog Name
          </MKTypography>
        </div>
        <div
          className="DogType"
          style={{
            fontSize: "1rem",
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "20%",
          }}
        >
          <MKTypography variant="p" style={{ fontSize: "1rem" }}>
            Breed
          </MKTypography>
        </div>
        <div
          className="City"
          style={{
            //   border: "2px solid red",
            width: "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "20%",
          }}
        >
          <MKTypography variant="p" style={{ fontSize: "1rem" }}>
            City
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
            width: "20%",
            marginRight: "1rem",
          }}
        >
          <MKButton
            size="medium"
            type="submit"
            variant="gradient"
            color="info"
            style={{
              minWidth: "1rem",
            }}
          >
            Info
          </MKButton>
        </div>
      </div>
    </Card>
  );
};

export default ListItemCard;
