import React from "react";
import { NavBar } from "./AppBar";
import { pages } from "./Site";
import Footer from "./Footer";
import { RestaurantCard } from "./RestaurantCard";
export function Restaurants(props) {

    return (
        <div>
            <NavBar pages={pages}></NavBar>
            <RestaurantCard />
            <Footer />
        </div>
    );
}
