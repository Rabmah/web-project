import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Card, CardContent, Grid, Input, Snackbar, Stack } from "@mui/material";
import { Delete } from "@mui/icons-material";
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
                    <Card style={{ backgroundColor: "white" }} variant="elevation">
                        <CardContent>
                            <Stack spacing={2}>
                                <h2>Welcome To Our Site</h2>
                                <label htmlFor="email"><b>Email</b></label>
                                <Input id="email" placeholder="email" type="email" starticon={<Delete />}></Input>
                                <label htmlFor="password"><b>Password</b></label>
                                <Input id="password" placeholder="password" type="password"></Input>
                                <Button style={{ Width: "auto" }} onClick={() => { handleSignIn(setIsopen, setErrors) }}>Sign in</Button>
                                <div>
                                    If you not have an account please
                                    <Link to="/SignUp"> sign up</Link>
                                </div>
                                <div>
                                    If you forget your password
                                    <Link to="/ResetPassword"> reset password</Link>
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
        </div >

    );
}
