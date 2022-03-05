import React, { useState } from "react";
import { Stack, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { hotelsCollection } from "../firebaseHelper";

async function HotelsData() {
    const hotel = (await hotelsCollection.get()).docs;
    console.log(hotel);
    let result = [];
    for (let i = 0; i < hotel.length; i++) {
        const data = hotel[i].data();
        console.log(data);
        result.push(data);
    }
    return result;
}

export function HotelCard(props) {
    const [hotels, sethotel] = useState([]);
    const [flag, setflag] = useState(false);

    if (flag === false) {
        setflag(true);
        HotelsData().then((data) => { sethotel(data); }).catch(e => console.log(e));
    }
    return (
        <div>
            <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                {hotels.map((hotel, i) => (
                    <Grid key={i} sx={{ boxShadow: 3 }} item md={5} mr={2} mt={2} ml={2}>
                        <Card sx={{ minHeight: "250", maxHeight: "450" }}>
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="350"
                                image={process.env.PUBLIC_URL + hotel.photo}
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>{hotel.title}</h2>
                                    <p>{hotel.location}</p>
                                    <p>{hotel.services}</p>
                                    <p>{hotel.contactInfo}</p>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
}
