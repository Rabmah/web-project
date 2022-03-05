import React, { useState } from "react";
import { Stack, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { thingstodoCollection } from "../firebaseHelper";

async function ThingsData() {
    const hotel = (await thingstodoCollection.get()).docs;
    console.log(hotel);
    let result = [];
    for (let i = 0; i < hotel.length; i++) {
        const data = hotel[i].data();
        console.log(data);
        result.push(data);
    }
    return result;
}

export function ThingsCard(props) {
    const [things, setthing] = useState([]);
    const [flag, setflag] = useState(false);

    if (flag === false) {
        setflag(true);
        ThingsData().then((data) => { setthing(data); }).catch(e => console.log(e));
    }
    return (
        <div>
            <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                {things.map((thing, i) => (
                    <Grid key={i} sx={{ boxShadow: 3 }} item md={5} mr={2} mt={2} ml={2}>
                        <Card sx={{ minHeight: "450", maxHeight: "450" }}>
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="350"
                                image={thing.photo}
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>{thing.title}</h2>
                                    <p>{thing.location}</p>
                                    <p>{thing.notices}</p>
                                    <p>{thing.length}</p>
                                    <p>{thing.contactInfo}</p>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
}
