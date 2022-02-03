import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Input, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { Link, useNavigate } from "react-router-dom";


async function handleSignIn(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        await firebaseAuth.sendPasswordResetEmail(email);
        seterror("Login Success")
    }
    catch (e) {
        setopen(true);
        seterror(e.code);
    }
}

export function ResetPassword(props) {
    const [errors, setErrors] = useState();
    const [isopen, setIsopen] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        if (errors === "Login Success")
            navigate("/");
    }, [navigate, errors])
    return (
        <div>
            <Input id="email" placeholder="email" type="email"></Input>
            <Input id="password" placeholder="password" type="password"></Input>
            <Button onClick={() => { handleSignIn(setIsopen, setErrors) }}>Sign in</Button>
            <Link to="/SignUp">sign up</Link>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
                onClose={() => { setIsopen(false) }}
                autoHideDuration={3000}>
                <Alert severity="error"> {errors} </Alert>
            </Snackbar>
        </div>

    );
}