import React from 'react';
import {
    Stack,
    Divider,
    Grid,
    Paper,
    Typography,
    useTheme,
} from '@mui/material';
import Experience from '../assets/Work.png';

const Experiences = (
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
                minHeight: 200,
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
                    minHeight: 200,
                    height: 'auto',
                }}
            >
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem
                    />}
                    spacing={2}
                    sx={{
                        minHeight: 200,
                        height: 'auto',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant='h4'
                            align='center'
                            color={theme.palette.primary.main}
                        >
                            <img
                                src={Experience}
                                alt="freepik"
                                height={50}
                                width={50}
                                sx={{
                                    verticalAlign: 'middle',
                                    paddingRight: 1,
                                }}
                            />
                            <br />
                            Experience
                        </Typography>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }}
                    >
                        <Typography
                            variant='h6'
                            color={theme.palette.primary.main}
                        >
                            Software Engineer
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            color={theme.palette.primary.dark}
                        >
                            Aubichol Intelligent Technologies(July 2018 - November 2022)
                        </Typography>
                    </div>
                </Stack>
            </Paper>
        </Grid >
    )
};

export default Experiences;