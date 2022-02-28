import { useContext, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useLocation, useNagivate, useParams, Link } from "react-router-dom";
import { UserContext } from "context/UserContext";

import TempLogo from "../../assets/logos/logo_paw_light.png";

// @mui material components

import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

const MasterHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const { pathname } = useLocation();
  const { navigate } = useLocation();
  // const { pathname } = useParams();
  const [user, setUser] = useContext(UserContext);
  const [userType, setUserType] = useState("");

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

  useEffect(() => {
    // declare the async data fetching function
    const checkWhatUserType = async () => {
      // Will wait one sec before proceeding
      await sleep(1000);

      // set state with the result
      await setUserType(user.user_type);
      console.log(`UserType is: ${user.user_type}`);
    };
    // call the function
    checkWhatUserType()
      // make sure to catch any error
      .catch(console.error);
  }, [user]);

  return (
    <AppBar
      sx={{}}
      style={{
        background: "transparent",
        boxShadow: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // border: " 2px solid red",
        top: 0,
        left: "auto !important",
      }}
    >
      <Toolbar
        sx={{
          width: { xs: "90%", md: "80%", xl: "60" },
          //   mx: { xs: "2rem !important", xl: "6rem !important" },
        }}
        disableGutters
        style={{
          //   border: " 2px solid yellow",
          top: 0,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",

          left: "auto !important",
          // left: "auto !important",
          // right: "auto !important",
        }}
      >
        {/* _______________________ MAIN LOGO */}
        <Link to="/" onClick={handleLogOut}>
          <MKBox
            mt={2}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <img src={TempLogo} alt="logo" width="80px" height="80px" />
          </MKBox>
        </Link>
        {/* _______________________ MENU HAMBURGER (LEFT) */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="light"
          >
            <MenuIcon />
          </IconButton>
          {/* _______________________ DROP DOWN LIST ITEMS */}
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
                <MenuItem>
                  <Link to="/">
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
                </MenuItem>
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
                <MenuItem>
                  <Link to="/">
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
                </MenuItem>
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
                  <Link to="/">
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
        {/* _______________________ NAV LINK ITEMS */}
        {userType === "doglover" ? (
          <>
            {/* ________DOGLOVER */}
            <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
              <Link to="/user/searchdog">
                <MKButton
                  variant="text"
                  color="light"
                  sx={{ my: 2, display: "block", fontSize: "1rem" }}
                >
                  Search Dogs
                </MKButton>
              </Link>
              <Link to="/">
                <MKButton
                  variant="text"
                  color="light"
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
                  color="light"
                  sx={{ my: 2, display: "block", fontSize: "1rem" }}
                >
                  My Dogs
                </MKButton>
              </Link>
              <Link to="/">
                <MKButton
                  variant="text"
                  color="light"
                  sx={{ my: 2, display: "block", fontSize: "1rem" }}
                >
                  My PlayDates
                </MKButton>
              </Link>
            </Box>
          </>
        )}

        {/* ______________________PROFILE MENU DROPDOWN */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      My Play Dates
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
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      Add Dog
                    </MKButton>
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to="/">
                    <MKButton
                      onClick={handleCloseNavMenu}
                      size="medium"
                      color="dark"
                      textAlign="center"
                      variant="text"
                      fontWeight="medium"
                    >
                      My Play Dates
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
