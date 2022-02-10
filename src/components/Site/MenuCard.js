import { Card, CardContent, Grid, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Image } from "@mui/icons-material";


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
        link: ""
    }
    ,
    {
        title: "Things To Do",
        imgpath: `${process.env.PUBLIC_URL}/assets/todo.jpg`,
        body: ["In Golan Hieght many people do not know somethings they can do.they know to come in winter to play ski and in spring to see the cherry and apple crops.",
            "But they do not know what they can do in all the time of the year.",
            "For this we chose to you some places and tracks you can do",
            "check here"],
        link: ""
    }
]


var cardStyle = {
    display: 'block',
    width: '150vw',
    transitionDuration: '0.3s',
    height: '150vw'
}

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
                        <Card style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/Golan.jpg)` , width: '100%', height: 'auto'}} variant="elevation">
                            <CardContent>
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

            {data.map((card) => (
               
                <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>
                    <Grid item md={8}>
                        <Card style={{ backgroundImage: `url(${card.imgpath})` }} variant="elevation" onClick={() => handlePages(card.link)}
>
                            <CardContent>
                                <Stack spacing={2}>
                                    <h2>{card.title}</h2>
                                    <div>
                                        {card.body.map((p) => (
                                            <p>
                                                {p}
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
                        <Card style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/writer.jpeg)` }} variant="elevation">
                            <CardContent>
                                <Stack spacing={2}>
                                    <h2>Our Story</h2>
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

            <div>
                <Grid container justifyContent={"center"} mt={"10vh"} alignItems={"center"}>

                    <Stack direction="row" spacing={5}>
                        <Card style={{ backgroundColor: "white" }} variant="elevation">
                            <CardContent>
                                <h2>Welcome To Our Site</h2>
                                <p>If you not have an account please</p>
                                <p>If you forget your password</p>
                            </CardContent>
                        </Card>

                        <Card style={{ backgroundColor: "white" }} variant="elevation">
                            <CardContent>
                                <h2>Welcome To Our Site</h2>
                                <p>If you not have an account please</p>
                                <p>If you forget your password</p>
                            </CardContent>
                        </Card>
                    </Stack>

                </Grid>
            </div>
        </div>
    );
}