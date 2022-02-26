import React from "react";
import {
  AppBar, Button, Box, Toolbar, IconButton,
  Menu, Container, Tooltip, MenuItem, Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebaseHelper";


export function NavBar(props) {
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePages = (page) => {
    if (page === 'Hotels') {
      navigate("/Site/Hotels");
    }
    if (page === 'Restaurants') {
      navigate("/Site/Restaurants");
    }
    if (page === 'Things to do') {
      navigate("/Site/ThingsToDo");
    }
    if (page === 'Home') {
      navigate("/Site");
    }
  }

  const handleExit = () => {
    firebaseAuth.signOut();
    navigate("/");
  }
  return (
    <div>
      <AppBar color="primary">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography onClick={() =>handlePages("Home")}
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              TRAVIL
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {props.pages.map((page) => (
                  <MenuItem key={page} onClick={() => handlePages(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography onClick={() =>handlePages("Home")}
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              TRAVIL
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {props.pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handlePages(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Exit">
                <IconButton onClick={handleExit} sx={{ p: 0, color: "white" }}>
                  <ExitToAppIcon fontSize="large" color="white" />
                </IconButton>
              </Tooltip>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}