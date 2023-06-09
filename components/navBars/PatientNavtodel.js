import { Component } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InsertPatientDataModal from "../modals/InsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";
import FormatListNumberedRtlIcon from '@mui/icons-material/FormatListNumberedRtl';

export default class PatientNavtodel extends Component {
    render() {
        let choosen = [
            'Itemperature',
            'Iheart_rate',
            'Isaturation',
            'Ihgt',
            'Iascultation',
            'Irespiration_rate',
            'Idiuresis_vol_24h'
          ];
        const callbackModal = () => {}
        
        return (
            <Box sx={{ mt: 1, mb: 1, width: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <VisualPatientDataModal />
                        <InsertPatientDataModal callbackModal={callbackModal} chooseDef={choosen} />
                        <IconButton
                            variant="outlined"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 1 }}
                            href="/PatientHome"
                        >
                            <FormatListNumberedRtlIcon color="inherit" />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
};