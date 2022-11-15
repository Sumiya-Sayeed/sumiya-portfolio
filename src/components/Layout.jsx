import React from "react";
import {
    Grid
} from '@mui/material';
import Appbar from './appbar';
import Intro from './Intro';
import Skills from './Skills';
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";

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
                <Projects id="Projects" />
                <Experience id="Experience" />
                <Education id="Education" />
            </Grid>
        </>
    )
};

export default Layout;