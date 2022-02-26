import React from "react";
import { NavBar } from "./AppBar";
import { pages } from "./Site";
import Footer from "./Footer";
import { ThingsCard } from "./ThingsCard";

export function ThingsToDo(props) {

    return (
        <div>
            <NavBar pages={pages}></NavBar>
            <ThingsCard />
            <Footer />
        </div>
    );
}
