import React from "react";
import {
    AppBar, Box, Toolbar, Container, Typography
} from "@mui/material";



export function AnonNavBar(props) {
    return (
        <div>
            <AppBar color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            TRAVIL
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            TRAVIL
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}