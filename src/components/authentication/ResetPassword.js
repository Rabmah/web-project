import React, { useEffect } from "react";
import { useState } from "react";
import { Alert, Button, Card, CardContent, Grid, Input, Snackbar, Stack } from "@mui/material";
//import { Delete, Person } from "@mui/icons-material";
import { firebaseAuth } from "../firebaseHelper";
import { useNavigate } from "react-router-dom";


async function handleResetPassword(setopen, seterror) {
    try {
        const email = document.getElementById("email").value;
        await firebaseAuth.sendPasswordResetEmail(email);
        seterror("Reset Password Success")
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
        if (errors === "Reset Password Success")
            navigate("/");
    }, [navigate, errors])
    return (
        <div>
            <Grid container justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
                <Grid item md={4}>
                    <Card style={{ backgroundColor: "white" }} variant="elevation">
                        <CardContent>
                            <Stack spacing={2}>
                                <h2>Forget Password</h2>
                                <label htmlFor="email"><b>Email</b></label>
                                <Input id="email" placeholder="email" type="email"></Input>
                                <Button onClick={() => { handleResetPassword(setIsopen, setErrors) }}>Reset Password</Button>
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