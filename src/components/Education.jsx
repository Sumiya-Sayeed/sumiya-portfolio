import React from 'react';
import {
    Stack,
    Divider,
    Grid,
    Paper,
    Typography,
    useTheme,
} from '@mui/material';
import Education from '../assets/Education.png';

const Educations = (
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
                            sx={{
                                [theme.breakpoints.down('sm')]: {
                                    fontSize: '1rem'
                                },
                            }}
                        >
                            <img
                                src={Education}
                                alt="freepik"
                                height={50}
                                width={50}
                                sx={{
                                    verticalAlign: 'middle',
                                    paddingRight: 1,
                                }}
                            />
                            <br />
                            Education
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
                            {`Bachelor of Science in Computer Science and Engineering(Graduated in 2017)`}
                        </Typography>
                        <Typography
                            variant='subtitle1'
                            color={theme.palette.primary.dark}
                        >
                            {`Stamford University Bangladesh(Graduated in 2017)`}

                        </Typography>
                    </div>
                </Stack>
            </Paper>
        </Grid >
    )
};

export default Educations;