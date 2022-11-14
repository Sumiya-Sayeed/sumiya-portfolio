import React from "react";
import { Grid, Paper, useTheme } from '@mui/material';
import Appbar from './appbar';
import Intro from './Intro';
import Skills from './Skills';

const Layout = () => {
    document.title = "Sumiya Sayeed";

    return (
        <>
            <Appbar />
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                justify="center"
                sx={{
                    margin: '0px auto',
                    height: '100%'
                }}
            >
                <Intro id="Intro" />
                <Skills id="Skills" />

            </Grid>
        </>
    )
};

export default Layout;