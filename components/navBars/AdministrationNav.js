import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React, { Component } from "react";
import AdministrationUserProfile from "../common/userProfile/AdministrationUserProfile";

class AdministrationNav extends Component {
    render() {
        return (
            <Box sx={{ mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <AdministrationUserProfile />
                    </Toolbar>
                </AppBar>
            </Box>
        );

    }
}

export default AdministrationNav;