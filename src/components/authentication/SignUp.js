import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Card, CardContent, Grid, Input, Snackbar, Stack } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";
import background from "../../pictuers/golanH.png";

var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const Strong = 3, Medium = 2, Weak = 1;

async function handleSignUp(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatpass = document.getElementById("repeat-password").value;
        let strength = (strongRegex.test(password) ? Strong : (mediumRegex.test(password) ? Medium : Weak));

        if (!emailRegex.test(email)) {
            seterror("please enter legal email");
            throw new Error();
        }
        if (strength === Weak) {
            seterror("your password is weak");
            throw new Error();
        }

        if (email === "" && password === "" && repeatpass === "") {
            seterror("please enter your data");
            throw new Error();
        } else
            if (email === "" && password === "") {
                seterror("please enter email and password");
                throw new Error();
            } else
                if (repeatpass === "") {
                    seterror("please enter the repeat password");
                    throw new Error();
                }
                else if (password === repeatpass) {
                    seterror("email is already exicted");
                    await firebaseAuth.createUserWithEmailAndPassword(email, password);
                    seterror("Success");
                }
                else {
                    seterror("password worng");
                    throw new Error();
                }
    }
    catch (e) {
        setopen(true);
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
        <div style={{ backgroundSize: "cover", backgroundImage: `url(${background})` }}>
            <Grid container justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
                <Grid item md={4}>
                    <Card style={{ background: "rgba(255,255,255,.7)" }} variant="elevation">
                        <CardContent>
                            <Stack spacing={2}>
                                <h2>Sign Up</h2>
                                <label htmlFor="email"><b>Email</b></label>
                                <Input id="email" placeholder="email" type="email"></Input>
                                <label htmlFor="password"><b>Password</b></label>
                                <Input id="password" placeholder="password" type="password"></Input>
                                <label htmlFor="password"><b>Repeat Password</b></label>
                                <Input id="repeat-password" placeholder="repeat password" type="password"></Input>
                                <Button onClick={() => { handleSignUp(setIsopen, setErrors) }}>Regesterd</Button>
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