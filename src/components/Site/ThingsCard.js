import React from "react";
import { Stack, Grid, Card, CardContent, CardMedia } from "@mui/material";

const things = [
    {
        photo: process.env.PUBLIC_URL + "/assets/Hermon.jpg",
        title: "אתר החרמון",
        location: "אתר החרמון",
        contactInfo: "phone: 1599550560",
        length: "",
        notices: "אתר קטיף עצמי של דובדבנים במטעי הכפר מסעדה. ניתן לקיים פיקניק במקום עם אוכל דרוזי מסורתי (בהזמנה מראש)."
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/Saar.jpg",
        title: "נחל סער ומפל סער ",
        location: "עין קיניה, גשר הידידות",
        contactInfo: "",
        length: "3.5 km ,2.5 hour",
        notices: " המסלול אינו קשה ומתאים למשפחות. נחל סער הוא נחל אכזב, כלומר זורם רק אחרי גשמים, ולכן הטיול בו מומלץ במיוחד בחורף ובאביב (ינואר-אפריל)",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/elad.jpeg",
        title: "נחל אל על ",
        location: "דרום הגולן",
        contactInfo: "",
        length: "3.5 km ,4 hour",
        notices: " המסלול אורכי, רצוי להשאיר רכב מאסף בנקודת הסיום. ניתן לחזור אל נקודת ההתחלה רגלית בטיילת המחברת בין אליעד ואבני איתן שאורכה כ3.5 ק”מ   מה לקחת: מים, מפת סימון שבילים מס’ 1, מים וכובע   שימו לב! הרחצה בבריכות הנחל באחריות המתרחצים בלבד.  אין כניסה לכלבים",
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/BigJoba.jpg",
        title: "הג’ובה הגדולה ",
        location: "צפון הגולן",
        contactInfo: "",
        length: "2 km ,1 hour",
        notices: "אופי הטיול: מסלול מעגלי נגיש, בדרגת קושי קלה מה לקחת: מים, מפת סימון שבילים מס’ 1, נעלי הליכה וכובע  יער אודם הוא שמורת טבע וחל איסור על קטיף פרחים וצמחים | יפה לטייל ביער אודם כל השנה, אך מומלץ מאוד בימי החורף אחרי שיורד שלג."
    },
    {
        photo: process.env.PUBLIC_URL + "/assets/ParkBostan.jpg",
        title: "פארק הבוסתן",
        location: "מסעדה",
        contactInfo: "phone: 0507651273",
        length: "",
        notices: "פארק קטיף עצמי – דובדבנים דובדבנים אורגנים טריים"
    },

    {
        photo: process.env.PUBLIC_URL + "/assets/CherryPark.jpg",
        title: "דובדבן היער",
        location: "מסעדה",
        contactInfo: "phone: 0507680789",
        length: "",
        notices: "אתר קטיף עצמי של דובדבנים במטעי הכפר מסעדה. ניתן לקיים פיקניק במקום עם אוכל דרוזי מסורתי (בהזמנה מראש)."
    },

];
export function ThingsCard(props) {

    return (
        <div>
            <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                {things.map((things, i) => (
                    <Grid key={i} sx={{ boxShadow: 3 }} mt={"10vh"} item md={5} mr={2} mb={2} ml={2}>
                        <Card
                            sx={{ minHeight: "250", maxHeight: "450" }}>
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="450"
                                image={things.photo}
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>{things.title}</h2>
                                    <p>{things.notices}</p>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div >
    );
}
