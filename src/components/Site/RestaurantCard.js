import React, { useState } from "react";
import { Stack, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { restaurantsCollection } from "../firebaseHelper";


/*const restaurants = [
    {
        photo: process.env.PUBLIC_URL + "/assets/Alsultan.PNG",
        title: "Alsultan restaurant",
        contactInfo: "phone: 052-801-2924",
        location: "Masaada",
        workTime: "Every day at 8:00 to 18:00",
        menu: "you can eat the best falafel, hummus and beans, hummus and meat, bread, vegetabble.",
    },
    {
        photo: process.env.PUBLIC_URL + "/assets/Nedal.PNG",
        title: "Nedal restaurant",
        contactInfo: "phone: 04-698-1066",
        location: "Masaada",
        workTime: "Every day at 8:00 to 16:00",
        menu: "",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/Ran.PNG",
        title: "Ran restaurant",
        contactInfo: "phone: 050-810-1185",
        location: "Ein kenia",
        workTime: "Every day at 10:00 to 18:00",
        menu: "",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/MORMEAT.jpeg",
        title: "MOR MEAT restaurant",
        contactInfo: "phone: 074-7009104",
        location: "Bokaata",
        workTime: "Every day at 14:00 to 23:00",
        menu: "",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/T_bone.jpeg",
        title: "T_bone_restaurant_bar",
        contactInfo: "phone: 0542283383",
        location: "Ram lake, masaada",
        workTime: "Every day at 10:00 to 23:00",
        menu: "",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/levant.jpeg",
        title: "levant restaurant",
        contactInfo: "phone: 0536262189",
        location: "Bokaata",
        workTime: "Every day at 10:00 to 22:00",
        menu: "",
    },
    {
        photo: process.env.PUBLIC_URL + "/assets/nissan.jpeg",
        title: "Nissan Restaurant",
        contactInfo: "phone: 046984796",
        location: "Majdal",
        workTime: "Every day at 8:00 to 23:59",
        menu: "",
    },

];*/

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
                    <Grid key={i} sx={{ boxShadow: 3 }} mt={"10vh"} item md={5} mr={2} mb={2} ml={2}>
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
