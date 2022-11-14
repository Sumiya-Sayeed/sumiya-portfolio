import React from 'react';
import {
    useMediaQuery,
    useTheme
} from '@mui/material';
import AppbarBigger from './AppbarBigger';
import AppbarSmaller from './AppbarSmaller';

const Appbar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        matches
            ?
            <AppbarSmaller />
            :
            <AppbarBigger />
    )
};

export default Appbar;