import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Card, CardContent, Grid, Input, Snackbar, Stack } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { Link, useNavigate } from "react-router-dom";


async function handleSignIn(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        await firebaseAuth.signInWithEmailAndPassword(email, password);
        setopen(true);
        seterror("Login Success")
    }
    catch (e) {
        setopen(true);
        seterror(e.code);
    }
}

export function SignIn(props) {
    const [errors, setErrors] = useState();
    const [isopen, setIsopen] = useState(false);
    let navigate = useNavigate();
    useEffect(() => {
        return firebaseAuth.onAuthStateChanged(u => {
            if (u) {
                navigate('/Store');
            }
        })
    }, [navigate])
    return (
        <div>
            <Grid container justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
                <Grid item md={4}>
                    <Card style={{ backgroundColor: "red" }} variant="elevation">
                        <CardContent>
                            <Stack spacing={2}>
                                <Input id="email" placeholder="email" type="email"></Input>
                                <Input id="password" placeholder="password" type="password"></Input>
                                <Button style={{ Width: "auto" }} onClick={() => { handleSignIn(setIsopen, setErrors) }}>Sign in</Button>
                                <div>
                                    hello abu samha
                                    <Link to="/SignUp"> sign up</Link>
                                </div>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Snackbar anchorOrigin={{ horizontal: "center", vertical: "top" }} open={isopen}
                onClose={() => { setIsopen(false) }}
                autoHideDuration={3000}>
                <Alert severity="error"> {errors} </Alert>
            </Snackbar>
        </div>

    );
}