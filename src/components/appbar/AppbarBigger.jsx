import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    useTheme,
} from '@mui/material';
import {
    Link,
    animateScroll as scroll,
} from "react-scroll";
import options from '../../assets/Menu';

const AppbarBigger = () => {
    const theme = useTheme();

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <AppBar
            position="fixed"
        >
            <Toolbar>
                <div
                    style={{
                        flexGrow: 1,

                    }}
                >
                    <Button
                        size="large"
                        onClick={scrollToTop}
                        sx={{
                            color: theme.palette.primary.light,
                            fontFamily: 'cursive',
                            fontSize: 30
                        }}
                    >
                        Sumiya Sayeed
                    </Button>
                </div>
                {
                    options.map(
                        (option, index) => (
                            <Link
                                // size="small"
                                key={index}
                                activeClass="active"
                                // component={Link}
                                // onClick={scrollToTop}
                                to={option.path}
                                offset={-100}
                                spy={true}
                                smooth={true}
                                duration={1000}
                            >
                                <Button
                                    sx={{
                                        color: theme.palette.primary.light
                                    }}
                                >
                                    {option.menu}
                                </Button>
                            </Link>
                        )
                    )
                }
            </Toolbar>
        </AppBar>
    );
};

export default AppbarBigger;
