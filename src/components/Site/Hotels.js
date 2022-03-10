import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../firebaseHelper";import { NavBar } from "./AppBar";
import { pages } from "./Site";
import Footer from "./Footer";
import { HotelCard } from "./HotelCard";

export function Hotels(props) {
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
            <HotelCard />
            <Footer />
        </div>
    );
}
