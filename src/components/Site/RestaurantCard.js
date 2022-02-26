import React from "react";
import { Stack, Grid, Card, CardContent, CardMedia } from "@mui/material";

import { useNavigate } from "react-router-dom";

const restaurants = [
    {
        photo: process.env.PUBLIC_URL + "/assets/Alsultan.PNG",
        title: "Alsultan restaurant",
        contactInfo: "phone: 052-801-2924",
        location: "Masaada",
        workTime:"",
        menu:"",
    },
    {
        photo: process.env.PUBLIC_URL + "/assets/Nedal.PNG",
        title: "Nedal restaurant",
        contactInfo: "phone: 04-698-1066",
        location: "Masaada",
        workTime:"",
        menu:"",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/Ran.PNG",
        title: "Ran restaurant",
        contactInfo: "phone: 050-810-1185",
        location: "Ein kenia",
        workTime:"",
        menu:"",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/MORMEAT.jpeg",
        title: "MOR MEAT restaurant",
        contactInfo: "phone: 074-7009104",
        location: "Bokaata",
        workTime:"",
        menu:"",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/T_bone.jpeg",
        title: "T_bone_restaurant_bar",
        contactInfo: "phone: 0542283383",
        location: "Ram lake, masaada",
        workTime:"",
        menu:"",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/levant.jpeg",
        title: "levant restaurant",
        contactInfo: "phone: 0536262189",
        location: "Bokaata",
        workTime:"",
        menu:"",
    },
    {
        photo: process.env.PUBLIC_URL + "/assets/nissan.jpeg",
        title: "Nissan Restaurant",
        contactInfo: "phone: 046984796",
        location: "Majdal",
        workTime:"",
        menu:"",
    },
 
];
export function RestaurantCard(props) {
    let navigate = useNavigate();

    const handlePages = (lnk) => {
        navigate(lnk);

    }
    return (
        <div>
        <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
            {restaurants.map((restaurants, i) => (
                <Grid key={i} sx={{ boxShadow: 3 }}  item md={5} mr={2} mb={2} ml={2}>
                    <Card
                        onClick={() => handlePages(restaurants.site)} sx={{minHeight: "250", maxHeight: "450"}}>
                        <CardMedia
                            component="img"
                            alt="an image"
                            height="450"
                            image={restaurants.photo}
                        />
                        <CardContent sx={{ fontStyle: 'oblique' }}>
                            <Stack spacing={2}>
                                <h2>{restaurants.title}</h2>
                                <p>{restaurants.services}</p>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div >
    );
}
