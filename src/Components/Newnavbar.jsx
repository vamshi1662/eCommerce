import * as React from "react";
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

import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FitbitIcon from "@mui/icons-material/Fitbit";

const pages = ["Products", "Pricing", "Contact Us"];

function ResponsiveAppBar() {
  const settings = ["Profile", "Account", "Dashboard", "Login"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const nav = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    if (e.target.innerText === "PRODUCTS") {
      console.log(1);
      nav("/product");
    }
    if (e.target.innerText === "CONTACT US") {
      console.log(1);
      nav("/contactus");
    }
   
  };

  const handleCloseUserMenu = (e) => {
    if (e.target.innerText === "Profile") {
      nav("/profile");
    } else if (e.target.innerText === "Login") {
      nav("/signIn");
    } else if (e.target.innerText === "Logout") {
      sessionStorage.removeItem("user");
      window.location.reload(true);
    }
  };
  if (sessionStorage.getItem("user")) {
    settings[3] = "Logout";
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", borderRadius: 0.5, height: "50px" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <FitbitIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                width: "35px",
                height: "35px",
                position: "relative",
                bottom: "8px",
                color:"black"
              }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  id="navTxt"
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    ml: "20px",
                    position: "relative",
                    bottom: "8px",
                    display: "block",
                    "&:hover": {
                      color: "grey",
                    },
                    "&:active": {
                      color: "whitesmoke",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Button
              onClick={() => {
                nav("/cart");
              }}
              variant="inline"
              sx={{
                color: "black",
                position: "relative",
                bottom: "8px",
                "&:hover": {
                  color: "grey",
                },
              }}
              startIcon={<ShoppingCartIcon />}
            >
              Cart
            </Button>
            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    sx={{
                      color: "black",
                      backgroundColor: "whitesmoke",
                      height: "30px",
                      width: "30px",
                      position: "relative",
                      bottom: "8px",
                    }}
                  ></Avatar>
                </IconButton>
              </Tooltip>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
