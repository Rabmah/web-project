import React, { useEffect } from "react";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./AppBar";
import { MenuCards } from "./MenuCard";
import Footer from "./Footer";

export const pages = ['Hotels', 'Restaurants', 'Things to do'];
//hotels צימרים
// Cars cars to rent/ bus stations
// Things to do: popular places to visit, מסלוליםף, טרקטרונים, ברכת רםת , חרמון , נהר סער, תל הקולות מול סוריה

export function Site(props) {

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
      <NavBar pages={pages} />
      <MenuCards />
      <Footer></Footer>
    </div>
  );
}

