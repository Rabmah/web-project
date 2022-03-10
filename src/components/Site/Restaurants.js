import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebaseHelper";import { NavBar } from "./AppBar";
import { pages } from "./Site";
import Footer from "./Footer";
import { RestaurantCard } from "./RestaurantCard";

export function Restaurants(props) {
    let navigate = useNavigate();
    useEffect(() => {
      return firebaseAuth.onAuthStateChanged(u => {
        if (!u) {
          navigate("/")
        } 
      })
    })
    return (
        <div>
            <NavBar pages={pages}></NavBar>
            <RestaurantCard />
            <Footer />
        </div>
    );
}
