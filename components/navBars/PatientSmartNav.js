import React, { Component } from "react";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GoBack from "../common/buttons/GoBack";
import GoHomePatient from "../common/buttons/GoHomePatient";
import BchooseInsert from "../common/buttons/patient/BchooseInsert";
import Grid from '@mui/material/Grid';

class PatientSmartNav extends Component {
    constructor(props) {
        super(props);
        this.state = { main: true };
    }

    render() {
        return (
            <Box sx={{ width: 1 }}>
                <Toolbar >
                    <Grid  
                        container
                    >
                        <Grid item xs={2}>
                            {this.props.page != 'PatientHome' ? <GoBack /> : null}
                        </Grid>
                        <Grid item xs={2}>
                            {this.props.page != 'PatientHome' ? <GoHomePatient /> : null}
                        </Grid>
                        <Grid item xs={5}>

                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={2}>
                            {this.props.page == 'PatientHome' || this.props.page == 'PatientMeasurements' ? <BchooseInsert /> : null}
                        </Grid>
                    </Grid>
                </Toolbar>
            </Box>
        );
    }
}

export default PatientSmartNav;