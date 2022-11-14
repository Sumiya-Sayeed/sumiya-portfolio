import React from 'react';
import { Grid, Paper, Typography, useTheme } from '@mui/material';
import SumiyaSayeed from '../assets/SumiyaSayeed.jpg';

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
                minHeight: 300,
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
                    padding: 2,
                    height: 300
                }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        height: 300
                    }}
                >
                    <Grid item
                        sm={12}
                        md={4}
                        container
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 'auto',
                            margin: 'auto'
                        }}
                    >
                        <img
                            src={SumiyaSayeed}
                            alt="SumiyaSayeed"
                            width={220}
                            height={220}
                            style={{
                                objectFit: 'cover',
                                borderRadius: 10,
                            }}
                        />

                        <Typography
                            variant='h6'
                            sx={{
                                color: theme.palette.primary.main,
                                padding: theme.spacing(1, 0)
                            }}
                        >
                            Sumiya Sayeed
                        </Typography>
                    </Grid>
                    <Grid item sm={12}
                        md={8}
                        sx={{
                            // display: 'flex',
                            // justifyContent: 'flex-start',
                            // alignItems: 'center',
                            height: 'auto',
                            margin: 'auto',
                            padding: 2
                        }}
                    >
                        <Typography
                            variant='body2'
                        >
                            I am a skilled, enthusiastic frontend developer. I am very passionate, cooperative, and workaholic individual. I relish learning new technologies and concepts.
                            <br />
                            I passionately combine good design, technology, and innovation in all my projects.
                            I am obsessed with high quality and attention to detail, and strive to find the best solutions possible. I am also a seasoned competitive programmer. My originality, and creativity is highly valued by my team mates.
                        </Typography>
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
};

export default Intro;