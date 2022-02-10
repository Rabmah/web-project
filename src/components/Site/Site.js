import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./AppBar";
import { MenuCards } from "./MenuCard";
import Footer from "./Footer";

export const pages = ['Hotels', 'Restaurants', 'Things to do'];
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

      <div>
        <Button onClick={() => { handleSite(setIsopen, setErrors) }}>Exit</Button>
        <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
          onClose={() => { setIsopen(false) }}
          autoHideDuration={3000}>
          <Alert severity="error"> {errors} </Alert>
        </Snackbar>
        <Footer></Footer>
      </div>
    </div>
  );
}

