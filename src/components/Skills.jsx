import React from 'react';
import {
    Stack,
    Chip,
    Divider,
    Grid,
    Paper,
    SvgIcon,
    Typography,
    useTheme
} from '@mui/material';
import LayersIcon from '@mui/icons-material/Layers';
import {
    skill
} from '../assets/Skills';

const Skills = (
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
                            color={theme.palette.primary.main}
                        >
                            <LayersIcon
                                sx={{
                                    verticalAlign: 'middle',
                                    paddingRight: 1,
                                    fontSize: 50
                                }}
                            />
                            Skills
                        </Typography>
                    </div>
                    <div>
                        {
                            skill.map(
                                (
                                    k, index
                                ) => (
                                    <div
                                        key={index}
                                    >
                                        <Typography
                                            variant='body2'
                                            color='#455a64'
                                            sx={{
                                                padding: 2
                                            }}
                                        >
                                            {k.label}
                                            {
                                                k.data.map(
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

export default Skills;