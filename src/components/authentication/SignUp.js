import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Card, CardContent, Grid, Input, Snackbar, Stack } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";


async function handleSignUp(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const repeatpass = document.getElementById("repeat-password").value;
        if (password === "" || repeatpass === "") {
            seterror("enter password");
            throw new Error();
        }
        else if (password === repeatpass) {
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
        <div>
            <Grid container justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
                <Grid item md={4}>
                    <Card style={{ backgroundColor: "white" }} variant="elevation">
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