import ListItemCard from "./ListItemCard";
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

const TestDesign = () => {
  return (
    <>
      <div // Insert Map into background
        className="mainContainer"
        style={{
          padding: 0,
          margin: 0,
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <MKBox
          className="left"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          style={{ height: "100%", width: "50%", border: "2px solid blue" }}
          component="section"
          py={6}
          px={{ xs: 2, lg: 0 }}
        >
          <ListItemCard />
          <ListItemCard />
          <ListItemCard />
          <ListItemCard />
          <ListItemCard />
          <ListItemCard />
          <ListItemCard />
        </MKBox>

        <MKBox
          className="right"
          display="flex"
          justifyContent="center"
          style={{ height: "100%", width: "50%", border: "2px solid red" }}
          component="section"
          position="relative"
          py={6}
          px={{ xs: 2, lg: 0 }}
        ></MKBox>
      </div>
    </>
  );
};

export default TestDesign;
