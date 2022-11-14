import React from 'react';
import { Grid, Paper, useTheme } from '@mui/material';

const Intro = (
    {
        id
    }
) => {
    const theme = useTheme();

    return (
        <Grid
            item
            xs={12}
            md={8}
            id={id}
            sx={{
                marginTop: 12,
                minHeight: 500,
                width: '100%',
                [theme.breakpoints.down('md')]: {
                    marginTop: 10,
                },
            }}
        >
            <Paper
                sx={{
                    backgroundColor: theme.palette.secondary.main,
                    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                    width: '80%',
                    margin: '0px auto',
                    [theme.breakpoints.down('md')]: {
                        width: '95%',
                    },
                }}
            >
                sdt
            </Paper>
        </Grid>
    )
};

export default Intro;