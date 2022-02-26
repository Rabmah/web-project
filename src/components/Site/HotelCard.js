import React, { useState } from "react";
import { Stack, Grid, Card, CardContent, CardMedia } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { hotelsCollection } from "../firebaseHelper";

const hotels = [
    {
        photo: process.env.PUBLIC_URL + "/assets/legacyVillage.PNG",
        title: "Legacy village hotel",
        contactInfo: "Email: legacyvillages@gmail.com \n phone number: 0526251435 \n 0542106356 \n 046870173",
        location: "Majdel shams",
        site: "http://cart-i.com/legacy-village/index.html",
        services: "באפשרותכם ליהנות מארוחת בוקר כפרית עשירה ומגוונת המוגשת היישר לחדרי האירוח - להתחיל את היום עם חיוך ובאנרגיות שיא, כמו גם ארוחות ערב דרוזיות אוותנטיות ומפנקות. בנוסף, ניתן להזמין טיפולי ספא ועיסויים מפנקים ומרגיעים, לגוף ולנפש, הנעשים על ידי צוות מטפלים מקצועי ומנוסה. בתאום מראש ובתוספת תשלום. ",
    },
    {
        photo: process.env.PUBLIC_URL + "/assets/layarPark.jpeg",
        title: "Layar park",
        contactInfo: "phone number: 0505129257 \n 0507769259 ",
        location: "Ein Kenia",
        site: "",
        services: "באפשרותכם ליהנות מארוחת בוקר כפרית עשירה ומגוונת המוגשת היישר לחדרי האירוח - להתחיל את היום עם חיוך ובאנרגיות שיא, כמו גם ארוחות ערב דרוזיות אוותנטיות ומפנקות. בנוסף, ניתן להזמין טיפולי ספא ועיסויים מפנקים ומרגיעים, לגוף ולנפש, הנעשים על ידי צוות מטפלים מקצועי ומנוסה. בתאום מראש ובתוספת תשלום. ",

    },

    {
        photo: process.env.PUBLIC_URL + "/assets/golanResort.jpeg",
        title: "golan resort",
        contactInfo: "phone number: 0504422062 ",
        location: "Bokaata",
        site: "",
        services: "באפשרותכם ליהנות מארוחת בוקר כפרית עשירה ומגוונת המוגשת היישר לחדרי האירוח - להתחיל את היום עם חיוך ובאנרגיות שיא, כמו גם ארוחות ערב דרוזיות אוותנטיות ומפנקות. בנוסף, ניתן להזמין טיפולי ספא ועיסויים מפנקים ומרגיעים, לגוף ולנפש, הנעשים על ידי צוות מטפלים מקצועי ומנוסה. בתאום מראש ובתוספת תשלום. ",

    },

    {
        photo: process.env.PUBLIC_URL + "/assets/OldSchool.jpg",
        title: "Old School",
        contactInfo: "phone number: 0527283622 ",
        location: "Ein kenia",
        site: "https://oldschool-zimmer.com/",
        services: "באפשרותכם ליהנות מארוחת בוקר כפרית עשירה ומגוונת המוגשת היישר לחדרי האירוח - להתחיל את היום עם חיוך ובאנרגיות שיא, כמו גם ארוחות ערב דרוזיות אוותנטיות ומפנקות. בנוסף, ניתן להזמין טיפולי ספא ועיסויים מפנקים ומרגיעים, לגוף ולנפש, הנעשים על ידי צוות מטפלים מקצועי ומנוסה. בתאום מראש ובתוספת תשלום. ",

    },
];

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
    let navigate = useNavigate();
    const [hotels2, sethotel] = useState([]);
    const [flag, setflag] = useState(false);
    const handlePages = (lnk) => {
        navigate(lnk);
    }
    if (flag === false)
        HotelsData().then((data) => { setflag(true); sethotel(data); }).catch(e => console.log(e));
    return (
        <div>
            <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                {hotels2.map((hotels, i) => (
                    <Grid key={i} sx={{ boxShadow: 3 }} item md={5} mr={2} mb={2} ml={2}>
                        <Card
                            onClick={() => handlePages(hotels.site)} sx={{ minHeight: "250", maxHeight: "450" }}>
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="450"
                                image={process.env.PUBLIC_URL + hotels.photo}
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>{hotels.title}</h2>
                                    <p>{hotels.services}</p>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
}
