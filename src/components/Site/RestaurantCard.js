import React, { useState } from "react";
import { Stack, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { restaurantsCollection } from "../firebaseHelper";

async function RestaurantsData() {
    const restaurant = (await restaurantsCollection.get()).docs;
    console.log(restaurant);
    let result = [];
    for (let i = 0; i < restaurant.length; i++) {
        const data = restaurant[i].data();
        console.log(data);
        result.push(data);
    }
    return result;
}

export function RestaurantCard(props) {
    const [restaurants, setrestaurants] = useState([]);
    const [flag, setflag] = useState(false);

    if (flag === false) {
        setflag(true);
        RestaurantsData().then((data) => { setrestaurants(data); }).catch(e => console.log(e));
    }

    return (
        <div>
            <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                {restaurants.map((restaurant, i) => (
                    <Grid key={i} sx={{ boxShadow: 3 }} item md={5} mr={2} mt={2} ml={2}>
                        <Card sx={{ minHeight: "250", maxHeight: "450" }}>
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="350"
                                image={restaurant.photo}
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>{restaurant.title}</h2>
                                    <p>{restaurant.location}</p>
                                    <p>{restaurant.menu}</p>
                                    <p>{restaurant.workTime}</p>
                                    <p>{restaurant.contactInfo}</p>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
}
