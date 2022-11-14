import React from 'react';
import { Grid, Paper, SvgIcon, IconButton, Typography, useTheme } from '@mui/material';
import {
    makeStyles
} from '@mui/styles';
import SumiyaSayeed from '../assets/SumiyaSayeed.jpg';
import logos from '../assets/ProfileLogos';

const useStyles = makeStyles(
    theme => (
        {
            div: {
                padding: theme.spacing(2, 0),
                [theme.breakpoints.down('md')]: {
                    padding: theme.spacing(1, 0),
                },
            }
        }
    )
);

const Intro = (
    {
        id
    }
) => {
    const theme = useTheme();
    const classes = useStyles();

    return (
        <Grid
            item
            xs={12}
            md={8}
            id={id}
            sx={{
                marginTop: 12,
                minHeight: 300,
                height: 'auto',
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
                        padding: 1,
                    },
                    padding: 2,
                    minHeight: 300,
                    height: 'auto',
                }}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        minHeight: 300,
                        height: 'auto',
                    }}
                >
                    <Grid item
                        sm={12}
                        md={4}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
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
                    <Grid
                        item
                        sm={12}
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
                        <div
                            className={classes.div}
                        >
                            {
                                logos.map((
                                    i,
                                    index
                                ) => (
                                    <IconButton
                                        key={index}
                                        href={i.href}
                                        sx={{
                                            color: theme.palette.primary.main
                                        }}
                                    >
                                        <SvgIcon
                                        >
                                            <svg
                                                xmlns={i.xmlns}
                                                viewBox={i.viewbox}
                                            >
                                                <path d={i.d} />
                                            </svg>
                                        </SvgIcon>
                                    </IconButton>
                                ))
                            }
                        </div>
                    </Grid>

                </Grid>

            </Paper>
        </Grid>
    )
};

export default Intro;