import React from 'react';
import {
    Stack,
    Chip,
    Divider,
    Grid,
    Paper,
    SvgIcon,
    Typography,
    useTheme,
    Link
} from '@mui/material';
import {
    projects
} from '../assets/Projects';
import Project from '../assets/Projects.png';

const Projects = (
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
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem
                    />}
                    spacing={2}
                    sx={{
                        minHeight: 300,
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
                                src={Project}
                                alt="freepik"
                                height={50}
                                width={50}
                                sx={{
                                    verticalAlign: 'middle',
                                    paddingRight: 1,
                                }}
                            />
                            <br />
                            Projects
                        </Typography>
                    </div>
                    <div>
                        {
                            projects.map(
                                (
                                    k, index
                                ) => (
                                    <div
                                        key={index}
                                    >
                                        <Link
                                            href={k.link}
                                            underline="hover"
                                            sx={{
                                                fontFamily: "sans-serif",
                                                padding: 2
                                            }}
                                        >
                                            {k.name}
                                        </Link>
                                        <Typography
                                            variant='body2'
                                            color='#455a64'
                                            sx={{
                                                padding: 2
                                            }}
                                        >
                                            Technology Used
                                            <br />
                                            {
                                                k.technologies.map(
                                                    (
                                                        i,
                                                        index1
                                                    ) => (
                                                        <Chip
                                                            key={index1}
                                                            icon={
                                                                <SvgIcon
                                                                    sx={{
                                                                    }}
                                                                >
                                                                    <svg
                                                                        xmlns={i.xmlns}
                                                                        viewBox={i.viewbox}
                                                                    >
                                                                        <path
                                                                            d={i.d}
                                                                        />
                                                                    </svg>
                                                                </SvgIcon>
                                                            }
                                                            label={i.label}
                                                            sx={{
                                                                padding: 1,
                                                                margin: 1,
                                                                backgroundColor: theme.palette.primary.main,
                                                                '& .MuiChip-icon': {
                                                                    color: theme.palette.secondary.main
                                                                },
                                                                '& .MuiChip-root': {
                                                                    height: '50px',
                                                                    color: theme.palette.secondary.main
                                                                },
                                                                '& .MuiChip-label': {
                                                                    color: theme.palette.secondary.main
                                                                }
                                                            }}
                                                        />
                                                    )
                                                )
                                            }
                                        </Typography>
                                        <Divider
                                            sx={{
                                                width: '70%',
                                                margin: theme.spacing(3, 0),
                                                paddingLeft: 2
                                            }}
                                        />
                                    </div>
                                )
                            )
                        }
                    </div>
                </Stack>
            </Paper>
        </Grid >
    )
};

export default Projects;