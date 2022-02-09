import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";


import { NavBar } from "./AppBar";
import { MenuCards } from "./MenuCard";

export const pages = ['Hotels', 'Restaurants', 'Cars', 'Things to do', 'Our Story'];
//hotels צימרים
// Cars cars to rent/ bus stations
// Things to do: popular places to visit, מסלוליםף, טרקטרונים, ברכת רםת , חרמון , נהר סער, תל הקולות מול סוריה
export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

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
      <NavBar pages={pages} settings={settings} />


      <MenuCards />



      {/* <div>
        <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
          <Grid item md={8}>
            <Card style={{ backgroundColor: "white" }} variant="elevation">
              <CardContent>
                <Stack direction="row" spacing={2}>
                  



                <Stack spacing={2}>
                  <h2>Here Are the Hotels</h2>
                  <div>
                    <p>For a relaxing travil you have to get a good hotels.</p>
                    <p>here we show you the most wanted hotels in Golan Hieght.</p>
                    click here t see the hotels
                  </div>
                </Stack>
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
      </div> */}



      <div id= "ourstory">

        hello word 

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