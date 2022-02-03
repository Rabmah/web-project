import React from "react";
import { useState } from "react";
import { Alert, Button, Input, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";


async function handleSignIn(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        await firebaseAuth.signInWithEmailAndPassword(email, password);
    }
    catch (e) {
        setopen(true);
        seterror(e.code);
    }
}

export function SignIn(props) {
    const [errors, setErrors] = useState();
    const [isopen, setIsopen] = useState(false);
    return (
        <div>
            <Input id="email" placeholder="email" type="email"></Input>
            <Input id="password" placeholder="password" type="password"></Input>
            <Button onClick={() => { handleSignIn(setIsopen, setErrors) }}>Sign in</Button>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
                onClose={() => { setIsopen(false) }}
                autoHideDuration={3000}>
                <Alert severity="error"> {errors} </Alert>
            </Snackbar>
        </div>

    );
}