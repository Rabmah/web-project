import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Input, Snackbar } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom"


async function handleSignUp(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        await firebaseAuth.createUserWithEmailAndPassword(email, password);
        seterror("Success");
    }
    catch (e) {
        setopen(true);
        seterror(e.code);
    }
}

export function SignUp(props) {
    const [errors, setErrors] = useState();
    const [isopen, setIsopen] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        if (errors === 'Success')
            navigate("/");
    }, [navigate, errors]);
    return (
        <div>
            <Input id="email" placeholder="email" type="email"></Input>
            <Input id="password" placeholder="password" type="password"></Input>
            <Button onClick={() => { handleSignUp(setIsopen, setErrors) }}>Sign up</Button>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
                onClose={() => { setIsopen(false) }}
                autoHideDuration={3000}>
                <Alert severity="error"> {errors} </Alert>
            </Snackbar>
        </div>

    );
}