import React from "react";
import { NavBar } from "./AppBar";
import { pages } from "./Site";
import Footer from "./Footer";
import { HotelCard } from "./HotelCard";

export function Hotels(props) {

    return (
        <div>
            <NavBar pages={pages}></NavBar>
            <HotelCard />
            <Footer />
        </div>
    );
}
