import React from "react";
import { Stack, Grid, Card, CardContent } from "@mui/material";
import { NavBar } from "./AppBar";
import { pages, settings } from "./Site";

export function Hotels(props) {
    return (
        <div>
            <NavBar pages={pages} settings={settings}></NavBar>
            <div >
                <Grid container justifyContent={"center"} minHeight={"100vh"} alignItems={"center"}>
                    <Grid item md={4}>
                        <Card style={{ backgroundColor: "white" }} variant="elevation">
                            <CardContent>
                                <Stack spacing={2}>
                                    <h2>Welcome To Our Site</h2>
                                    <p>If you not have an account please</p>
                                    <p>If you forget your password</p>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
