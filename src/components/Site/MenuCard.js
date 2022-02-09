import { Card, CardContent, Grid, Stack } from "@mui/material";

const data = [
    {
        title: "Hotels",
        imgpath: "",
        body: ["For a relaxing travil you have to get a good hotels.", "here we show you the most wanted hotels in Golan Hieght."],
        link: `${process.env.PUBLIC_URL}/assets/roro.jpeg`
    },
    {
        title: "Restaurants",
        imgpath: "",
        body: ["For a relaxing travil you have to get a good hotels.", "here we show you the most wanted hotels in Golan Hieght."],
        link: ""
    }
    ,
    {
        title: "Cars",
        imgpath: "",
        body: ["For a relaxing travil you have to get a good hotels.", "here we show you the most wanted hotels in Golan Hieght."],
        link: ""
    },
    {
        title: "Things to do",
        imgpath: "",
        body: ["For a relaxing travil you have to get a good hotels.", "here we show you the most wanted hotels in Golan Hieght."],
        link: ""
    }
]

export function MenuCards(props) {


    return (
        <div>
            <div>
                <Grid container justifyContent={"center"} mt={"20vh"} alignItems={"center"}>
                    <Grid item md={8}>
                        <Card style={{ backgroundColor: "white" }} variant="elevation">
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
                        <Card style={{backgroundImage: `url(${card.link})` }} variant="elevation">
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

        </div>
    );


}