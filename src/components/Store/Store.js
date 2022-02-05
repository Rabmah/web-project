import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";


async function handleStore(setopen, seterror) {
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

export function Store(props) {
    const [errors, setErrors] = useState();
    const [isopen, setIsopen] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        return firebaseAuth.onAuthStateChanged(u => {
            if (u) {
                // yes user
                // navigate('/Store');
            } else {
                // no user
                navigate("/");
            }
        })
    })
    return (
        <div>
            <Button onClick={() => { handleStore(setIsopen, setErrors) }}>Exit</Button>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
                onClose={() => { setIsopen(false) }}
                autoHideDuration={3000}>
                <Alert severity="error"> {errors} </Alert>
            </Snackbar>
        </div>

    );
}