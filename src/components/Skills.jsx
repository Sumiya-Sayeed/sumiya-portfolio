import React from 'react';
import { Chip, Grid, Paper, SvgIcon, Typography, useTheme } from '@mui/material';
import {
    makeStyles
} from '@mui/styles';
import LayersIcon from '@mui/icons-material/Layers';
import { skill } from '../assets/Skills';

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

const Skills = (
    {
        id
    }
) => {
    const theme = useTheme();
    const classes = useStyles();
    console.log('fsdfg', skill)
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
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography
                            variant='h4'
                            color={theme.palette.primary.main}
                        >
                            <LayersIcon sx={{
                                verticalAlign: 'middle',
                                paddingRight: 1,
                                fontSize: 50
                            }} />
                            Skills
                        </Typography>
                        {
                            skill.map(
                                (k, index) => (
                                    <div
                                        key={index}
                                    >
                                        <Typography
                                            variant='subtitle1'
                                            color='#455a64'
                                            sx={{
                                                padding: 2
                                            }}
                                        >
                                            {k.label}
                                            {
                                                k.data.map((
                                                    i,
                                                    index1
                                                ) => (
                                                    <Chip
                                                        key={index1}
                                                        icon={<SvgIcon
                                                            sx={{
                                                            }}
                                                        >
                                                            <svg
                                                                xmlns={i.xmlns}
                                                                viewBox={i.viewbox}
                                                            >
                                                                <path d={i.d} />
                                                            </svg>
                                                        </SvgIcon>}
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
                                                ))
                                            }
                                        </Typography>
                                    </div>
                                )
                            )
                        }
                    </Grid>
                </Grid>

            </Paper>
        </Grid>
    )
};

export default Skills;