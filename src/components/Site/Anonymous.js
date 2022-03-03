import React from "react";
import { AnonNavBar } from "./AnonAppBar";
import { AnonMenu } from "./AnonMenu";
import Footer from "./Footer";

export function Anonymous(props) {

    return (
        <div>
            <AnonNavBar />
            <AnonMenu />
            <Footer />
        </div>
    );
}

