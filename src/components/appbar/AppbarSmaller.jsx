import React, {
    useState
} from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Drawer,
    useTheme
} from '@mui/material';
import {
    Menu,
    // Search
} from '@mui/icons-material';
import {
    Link,
    animateScroll as scroll
} from "react-scroll";
import options from '../../assets/Menu';

const AppbarForSmall = () => {
    const theme = useTheme();
    const [
        anchorEl,
        setAnchorEl
    ] = useState(null);

    const [
        open,
        setOpen
    ] = useState(false);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const handleClick = event => {
        setOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = event => {
        setOpen(false);
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
        >
            <Toolbar>
                <div
                    onClick={scrollToTop}
                    style={{
                        flexGrow: 1,
                        color: theme.palette.primary.light,
                    }}
                >
                    Sumiya Sayeed
                </div>
                <IconButton
                    aria-owns={open ? 'fade-menu' : null}
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{
                        color: theme.palette.primary.light,
                    }}
                >
                    <Menu />
                </IconButton>
                <Drawer
                    id="fade-menu"
                    anchorel={anchorEl}
                    open={open}
                    anchor='right'
                    transitionDuration={500}
                    onClose={handleClose}
                    sx={{
                        '& .MuiPaper-root': {
                            width: '80%'
                        }
                    }}
                // TransitionComponent={Fade}
                >
                    {options.map(option => (
                        // <Link

                        // >
                        <Link
                            onClick={handleClose}
                            key={option.path}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000}
                            to={option.path}
                        >
                            <Button
                                sx={{
                                    color: theme.palette.primary.main
                                }}
                            >
                                {option.menu}
                            </Button>
                        </Link>
                        // </Link>
                    ))}
                    <Button
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default AppbarForSmall;
