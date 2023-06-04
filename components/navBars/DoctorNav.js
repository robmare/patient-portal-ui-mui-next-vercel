import React, { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';
import UserProfile from "../common/userProfile/UserProfile";
import Link from '../../components/Link';

class DoctorNav extends Component {
    constructor(props) {
        super(props);
        this.state = { main: true };
    }

    render() {
        let button;
        if (this.state.main) {
            button = <Link style={{ color: '#fff' }} href="/DoctorAgenda">
                <IconButton
                    variant="outlined"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 1 }}
                >
                    <CalendarMonthIcon color="inherit" />
                </IconButton>
            </Link >;
        }
        else {
            button = <Link style={{ color: '#fff' }} href="/DoctorHome">
                <IconButton
                    variant="outlined"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ ml: 1 }}
                >
                    <FormatListNumberedRtlIcon color="inherit" />
                </IconButton>
            </Link>

        }

        return (
            <Box sx={{ mt: 1, mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar  >
                        <UserProfile sx={{ width: 0.6 }} />
                        {button}
                    </Toolbar>
                </AppBar>
            </Box>

        );
    }
}
export default DoctorNav;