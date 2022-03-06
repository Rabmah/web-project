import React, { useEffect } from "react";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./AppBar";
import { MenuCards } from "./MenuCard";
import Footer from "./Footer";

export const pages = ['Hotels', 'Restaurants', 'Things to do'];
export function Site(props) {

  let navigate = useNavigate();
  useEffect(() => {
    return firebaseAuth.onAuthStateChanged(u => {
      if (u) {
      } else {
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

