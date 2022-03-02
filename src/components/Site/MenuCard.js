import { autocompleteClasses, Card, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

//import { Image } from "@mui/icons-material";
const partners = [
    {
        photo: process.env.PUBLIC_URL + "/assets/photo1.jpg",
        title: "Jameel",
        body: ["Hello I'm enthusiastic to know if our site liked you or not.", "This is the first site to know about traviling in Golan Hights.",
            "Here is my phone number if you want to call me."],
        mail: "jameel@gmail.com"
    },
    {
        photo: process.env.PUBLIC_URL + "/assets/photo2.jpg",
        title: "Rabea",
        body: ["Hello every one please if you enjoy the site come back again.", "And dont forget to tell your frinds about as.",
            "Here is my phone number if you want to call me."],
        mail: "rabea@gmail.com"
    },
];

const data = [
    {
        title: "Here Are the Hotels",
        imgpath: `${process.env.PUBLIC_URL}/assets/roro.jpeg`,
        body: ["For a relaxing travil you have to get a good hotels.",
            "here we show you the most wanted hotels in Golan Hieght."],
        link: "/Site/Hotels"
    },
    {
        title: "Restaurants",
        imgpath: `${process.env.PUBLIC_URL}/assets/food.jpg`,
        body: ["For a relaxing travil you have to get a good hotels.",
            "You can take the full time and don't waste your time to check if you want this restaurant.",
            "click to see the restaurants that give you the best meal you want."],
        link: "/Site/Restaurants"
    }
    ,
    {
        title: "Things To Do",
        imgpath: `${process.env.PUBLIC_URL}/assets/todo.jpg`,
        body: ["In Golan Hieght many people do not know somethings they can do.they know to come in winter to play ski and in spring to see the cherry and apple crops.",
            "But they do not know what they can do in all the time of the year.",
            "For this we chose to you some places and tracks you can do",
            "check here"],
        link: "/Site/ThingsToDo"
    }
];

export function MenuCards(props) {
    let navigate = useNavigate();

    const handlePages = (lnk) => {
        navigate(lnk);

    }

    return (
        <div>
            <div>
                <Grid container justifyContent={"center"} mt={"20vh"} alignItems={"center"}>
                    <Grid item md={8}>
                        <Card variant="elevation">
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="250"
                                image="/assets/Golan.jpg"
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>Welcome to golan heights</h2>
                                    <div>
                                        <p>We built this site to guide tourists for the good places in the golan.</p>
                                        <p>The services you can get in this site are:
                                            Hotels to rest and places to set with your family and enjoy,
                                            Best places to visit,
                                            A great activitise to do.</p>
                                    </div>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            {data.map((card, i) => (
                <Grid key={i} container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                    <Grid sx={{ width: '100%', boxShadow: 3 }} item md={8}>
                        <Card variant="elevation"
                            onClick={() => handlePages(card.link)}>
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="250"
                                image={card.imgpath}
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>{card.title}</h2>
                                    <div>
                                        {card.body.map((dis, j) => (
                                            <p key={j}>
                                                {dis}
                                            </p>
                                        ))}
                                    </div>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            ))}

            <div>
                <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                    <Grid item md={8}>
                        <Card variant="elevation">
                            <CardMedia
                                component="img"
                                alt="an image"
                                height="250"
                                image="/assets/writer.jpeg"
                            />
                            <CardContent sx={{ fontStyle: 'oblique' }}>
                                <Stack spacing={2}>
                                    <h2>Our Story</h2>

                                    <p>We built this site to guide tourists for the good places in the golan.</p>
                                    <p>The services you can get in this site are:
                                        Hotels to rest and places to set with your family and enjoy,
                                        Best places to visit,
                                        A great activitise to do.</p>

                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>

            <div>
                <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                    <Stack direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 2, md: 5 }}>
                        {partners.map((card, i) => (
                            <Card sx={{ maxWidth: "50vh", width: autocompleteClasses }} key={i}>
                                <CardMedia
                                    component="img"
                                    alt="an image"
                                    height="160"
                                    image={card.photo}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.body.join('\n')}
                                    </Typography>
                                    <Typography>
                                        {card.mail}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
            </div>
        </div>
    );
}