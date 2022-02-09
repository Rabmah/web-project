import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, AppBar, Button, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { Card, CardContent, Grid, Stack } from "@mui/material";

const pages = ['Hotels', 'Restaurants', 'Cars', 'Things to do'];
//hotels צימרים
// Cars cars to rent/ bus stations
// Things to do: popular places to visit, מסלוליםף, טרקטרונים, ברכת רםת , חרמון , נהר סער, תל הקולות מול סוריה
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

async function handleSite(setopen, seterror) {
  try {
    await firebaseAuth.signOut();
    setopen(true);
    seterror("Logout Success");
  }
  catch (e) {
    setopen(true);
    seterror(e.code);
  }
}

export function Site(props) {
  const [errors, setErrors] = useState();
  const [isopen, setIsopen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  let navigate = useNavigate();
  useEffect(() => {
    return firebaseAuth.onAuthStateChanged(u => {
      if (u) {
        // yes user
        // navigate('/Site');
      } else {
        // no user
        navigate("/");
      }
    })
  })
  return (
    <div>
      <div>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
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
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
              >
                TRAVIL
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
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
      </div>

      <div>
        <Grid container justifyContent={"center"} mt={"20vh"} alignItems={"center"}>
          <Grid item md={8}>
            <Card style={{ backgroundColor: "white" }} variant="elevation">
              <CardContent>
                <Stack spacing={2}>
                  <h2>Here Are the Hotels</h2>
                  <div>
                    <p>For a relaxing travil you have to get a good hotels.</p>
                    <p>here we show you the most wanted hotels in Golan Hieght.</p>
                    click here t see the hotels
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
          <Grid item md={8}>
            <Card style={{ backgroundColor: "white" }} variant="elevation">
              <CardContent>
                <Stack spacing={2}>
                  <h2>Restaurants</h2>
                  <div>
                    <p>For a good meal you can check this Restaurants to decide where you want to eat.</p>
                    <p>You can take the full time and don't waste your time to check if you
                      want this restaurant.</p>
                    <p>click to see the restaurants that give you the best meal you want.</p>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
          <Grid item md={8}>
            <Card style={{ backgroundColor: "white" }} variant="elevation">
              <CardContent>
                <Stack spacing={2}>
                  <h2>Cars / Bus</h2>
                  <div>
                    <p>habeb ane mareftsh sho bde aktob hon f ant zabt ha alshe</p>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div>
        <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
          <Grid item md={8}>
            <Card style={{ backgroundColor: "white" }} variant="elevation">
              <CardContent>
                <Stack spacing={2}>
                  <h2>Things To Do</h2>
                  <div>
                    <p>In Golan Hieght many people do not know somethings they can do.
                      they know to come in winter to play ski and in spring to see the
                      cherry and apple crops.</p>
                    <p>But they do not know what they can do in all the time of the year.</p>
                    <p>For this we chose to you some places and tracks you can do</p>
                    <p>check here</p>
                  </div>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <div>
        <Button onClick={() => { handleSite(setIsopen, setErrors) }}>Exit</Button>
        <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
          onClose={() => { setIsopen(false) }}
          autoHideDuration={3000}>
          <Alert severity="error"> {errors} </Alert>
        </Snackbar>
      </div>
    </div>
  );
}