import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Card, CardContent, Grid, Input, Snackbar, Stack } from "@mui/material";
import { firebaseAuth } from "../firebaseHelper";
import { Link, useNavigate } from "react-router-dom";
import background from "../../pictuers/golanH.png";

async function handleSignIn(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" && password === "") {
            seterror("please enter email and password");
            throw new Error("1");
        } else if (email === "") {
            seterror("please enter email");
            throw new Error("2");
        } else if (password === "") {
            seterror("please enter password");
            throw new Error("3");
        }

        seterror("email or password wrong");
        await firebaseAuth.signInWithEmailAndPassword(email, password);
        setopen(true);
        seterror("Login Success");
    }
    catch (e) {
        setopen(true);
    }
}

export function SignIn(props) {
    const [errors, setErrors] = useState();
    const [isopen, setIsopen] = useState(false);

    let navigate = useNavigate();
    useEffect(() => {
        return firebaseAuth.onAuthStateChanged(u => {
            if (u) {
                navigate('/Site');
            }
        })
    }, [navigate])
    return (
        <div style={{ backgroundSize: "cover", backgroundImage: `url(${background})` }} >
            <Grid container justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
                <Grid item md={4}>
                    <Card style={{ background: "rgba(255,255,255,.7)" }} variant="elevation">
                        <CardContent>
                            <Stack spacing={2}>
                                <h2>Tourism in the Golan Height</h2>
                                <label htmlFor="email"><b>Email</b></label>
                                <Input id="email" placeholder="email" type="email"></Input>
                                <label htmlFor="password"><b>Password</b></label>
                                <Input id="password" placeholder="password" type="password"></Input>
                                <Button style={{ Width: "auto", fontWeight: 'medium' }} onClick={() => { handleSignIn(setIsopen, setErrors) }}>Sign in</Button>
                                <Button style={{ Width: "auto", fontWeight: 'medium' }} onClick={() => { navigate('/Anonymous') }}>Login with out Email</Button>
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
        </div>
    );
}
