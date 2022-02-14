import React from "react";
import { Stack, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

const hotels = [
    {
        photo: process.env.PUBLIC_URL + "/assets/legacyVillage.PNG",
        title: "Legacy village hotel",
        contactInfo: "Email: legacyvillages@gmail.com \n phone number: 0526251435 \n 0542106356 \n 046870173        ",
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
        services: "",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/golanResort.jpeg",
        title: "golan resort",
        contactInfo: "phone number: 0504422062 ",
        location: "Bokaata",
        site: "",
        services: "",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/OldSchool.jpg",
        title: "Old School",
        contactInfo: "phone number: 0527283622 ",
        location: "Ein kenia",
        site: "https://oldschool-zimmer.com/",
        services: "",
    },
];
export function HotelCard(props) {
    let navigate = useNavigate();

    const handlePages = (lnk) => {
        navigate(lnk);

    }
    return (
        <div>
            {hotels.map((hotels, i) => (
                <Grid key={i} container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                    <Grid sx={{ width: '100%', boxShadow: 3 }} item md={8}>
                        <Card style={{ backgroundImage: `url(${hotels.photo})` }} variant="elevation"
                            onClick={() => handlePages(hotels.site)}>
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>{hotels.title}</h2>

                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ))}
        </div>
    );
}
