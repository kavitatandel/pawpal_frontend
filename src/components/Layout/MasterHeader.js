import { useContext, useEffect, useState } from "react";
import { useLocation, useNagivate, useParams, Link } from "react-router-dom";
import { UserContext } from "context/UserContext";
// MUI & Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HumanAvatar from "../../assets/images/avatars/human-av-grad.png";
import TempLogo from "../../assets/logos/logo_paw_light.png";

//import layout.css
import "../../styles/layout.css";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   abRoot: {
//     backgroundColor: "red"
//   },
// })
// );

const MasterHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { pathname } = useLocation();
  const { navigate } = useLocation();
  const { dogId } = useParams();
  const [user, setUser] = useContext(UserContext);
  const [userType, setUserType] = useState("");

  // //classes for material styles
  // const classes = useStyles();

  const handleLogOut = () => {
    setUser({});
    localStorage.removeItem("usertoken");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const sleep = (ms) => {
    new Promise((resolve) => {
      console.log(`triggering timeout for 2sec`);
      setTimeout(resolve, ms);
    });
  };

  // const checkForProfilePic = () => {
  //   if (user.profile_pic === "") {
  //     return HumanAvatar;
  //   } else {
  //     return user.profile_pic;
  //   }
  // };

  useEffect(() => {
    // declare the async data fetching function
    const checkWhatUserType = async () => {
      // Will wait one sec before proceeding
      await sleep(1000);

      // set state with the result
      await setUserType(user.user_type);
    };
    // call the function
    checkWhatUserType()
      // make sure to catch any error
      .catch(console.error);
  }, [user]);

  return (
    <AppBar
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        top: 0,
        left: "auto !important",
        background: "rgba( 255, 255, 255, 0.7 )",
        boxShadow: "0 7px 30px 5px rgba(255, 82, 0, 0.2)",
        backdropFilter: "blur( 12.5px )",
      }}

      // classes={{
      //   root: classes.abRoot,
      //   positionStatic: classes.abStatic
      // }}
    >
      <Toolbar
        sx={{
          width: { xs: "90%", md: "80%", xl: "60" },
        }}
        disableGutters
        style={{
          top: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          left: "auto !important",
        }}
      >
        {/* _______________________ MAIN LOGO */}
        {/* <Link to="/" onClick={handleLogOut}> */}
        <MKBox
          mt={2}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={TempLogo} alt="logo" width="80px" height="80px" />
        </MKBox>
        {/* </Link> */}
        {/* _______________________ MENU HAMBURGER (LEFT) */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="primary"
          >
            <MenuIcon />
          </IconButton>
          {/* _______________________ LEFT SIDE DROP DOWN LIST ITEMS */}
          {userType === "doglover" ? (
            <>
              {/* __________DOGLOVER  */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* <MenuItem>
                  <Link to="/user/searchdog">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"

                    >
                      Home
                    </MKButton>
                  </Link>
                </MenuItem> */}
                <MenuItem>
                  <Link to="/user/searchdog">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      Search Dogs
                    </MKButton>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/user/dogloverrequests">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      My PlayDates
                    </MKButton>
                  </Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            //   ________OWNER
            <>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* <MenuItem>
                  <Link to="/" onClick={handleLogOut}>
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      Home
                    </MKButton>
                  </Link>
                </MenuItem> */}
                <MenuItem>
                  <Link to="/owner/ownerdogs">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      My Dogs
                    </MKButton>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={`/owner/ownerdogrequests`}>
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      My Playdates
                    </MKButton>
                  </Link>
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
        {/* _______________________ NAV LINK ITEMS ON MAIN HEADER */}
        {userType === "doglover" ? (
          <>
            {/* ________DOGLOVER */}
            <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
              <Link to="/user/searchdog">
                <MKButton
                  variant="text"
                  color="dark"
                  sx={{ my: 2, display: "block", fontSize: "1rem" }}
                >
                  Search Dogs
                </MKButton>
              </Link>
              <Link to="/user/dogloverrequests">
                <MKButton
                  variant="text"
                  color="dark"
                  sx={{ my: 2, display: "block", fontSize: "1rem" }}
                >
                  My PlayDates
                </MKButton>
              </Link>
            </Box>
          </>
        ) : (
          <>
            {/* ________OWNER */}
            <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
              <Link to="/owner/ownerdogs">
                <MKButton
                  variant="text"
                  color="dark"
                  sx={{ my: 2, display: "block", fontSize: "1rem" }}
                >
                  My Dogs
                </MKButton>
              </Link>
              <Link to={`/owner/ownerdogrequests`}>
                <MKButton
                  variant="text"
                  color="dark"
                  sx={{ my: 2, display: "block", fontSize: "1rem" }}
                >
                  My PlayDates
                </MKButton>
              </Link>
            </Box>
          </>
        )}

        {/* ______________________PROFILE MENU DROPDOWN (RIGHT) */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={handleOpenUserMenu}
              sx={{ p: 0, backgroundColor: "white" }}
            >
              {/* <Avatar
                sx={{ width: 56, height: 56 }}
                alt={`${user.first_name} avatar`}
                src={headerAvatar}
              /> */}
              {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
              <Avatar
                src={user.profile_pic}
                alt={`${user.first_name} avatar`}
                sx={{ width: 55, height: 55, border: "1px solid white" }}
              >
                <img
                  src={HumanAvatar}
                  alt="avatar"
                  style={{ width: "100%", height: "100%" }}
                />
              </Avatar>
            </IconButton>
          </Tooltip>

          {userType === "doglover" ? (
            <>
              {/* _______________DOGLOVER */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/user">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      My Profile
                    </MKButton>
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/">
                    <MKButton
                      onClick={handleLogOut}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      Log Out
                    </MKButton>
                  </Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              {/* _____________OWNER */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/user">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      My Profile
                    </MKButton>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/">
                    <MKButton
                      onClick={handleLogOut}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      Log Out
                    </MKButton>
                  </Link>
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default MasterHeader;
