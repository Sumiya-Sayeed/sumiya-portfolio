import React, {
    useState
} from 'react';
import {
    MenuItem,
    AppBar,
    Toolbar,
    SvgIcon,
    IconButton,
    Button,
    Drawer,
} from '@mui/material';
import {
    Clear,
    ExpandMore,
    Menu,
    // Search
} from '@mui/icons-material';
import {
    Link,
    animateScroll as scroll
} from "react-scroll";
import options from '../../assets/Menu';

const AppbarForSmall = () => {
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

                >
                    Sumiya
                </div>
                <IconButton
                    aria-owns={open ? 'fade-menu' : null}
                    aria-haspopup="true"
                    onClick={handleClick}
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
                // TransitionComponent={Fade}
                >
                    {options.map(option => (
                        // <Link

                        // >
                        <Link
                            onClick={handleClose}
                            key={option.path}
                            // activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={2000}
                            to={option.path}
                        >
                            {option.menu}
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
