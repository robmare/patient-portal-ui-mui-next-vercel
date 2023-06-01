
import Box from '@mui/material/Box';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import React, { Component } from "react";

class Idate_time extends Component {
    constructor(props) {
        super(props)
        let now = Date.now();

        if (props.dateSelected) {
            this.state = { defDate: props.dateSelected }
        } else {
            this.state = { defDate: now }
        }
    }

    render() {
        return (
            <Box sx={{ width: 1, mt: 1.5 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker defaultValue={dayjs(this.state.defDate)} />
                </LocalizationProvider>
            </Box>
        );
    }
}

export default Idate_time;