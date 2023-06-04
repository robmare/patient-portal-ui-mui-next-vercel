import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import React, { Component } from "react";
import ChooseInsertPatientDataModal from "../modals/ChooseInsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";

class AdminNav extends Component {
    render() {
        return (
            <Box sx={{ mt: 1, mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <VisualPatientDataModal />
                        <ChooseInsertPatientDataModal />
                        <IconButton
                            variant="outlined"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 1 }}
                            onClick={this.handleClick}
                            href="/PatientAgenda"
                        >
                            <CalendarMonthIcon color="inherit" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default AdminNav;