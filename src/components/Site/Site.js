import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, AppBar, Button, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";


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
            <AppBar>

            </AppBar>
            <Button onClick={() => { handleSite(setIsopen, setErrors) }}>Exit</Button>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
                onClose={() => { setIsopen(false) }}
                autoHideDuration={3000}>
                <Alert severity="error"> {errors} </Alert>
            </Snackbar>
        </div>

    );
}