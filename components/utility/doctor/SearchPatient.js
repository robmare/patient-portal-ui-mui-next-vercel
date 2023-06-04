import React, { Component } from "react";
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import { Container, TextField } from "@mui/material";

class SearchPatient extends Component {
    render() {
        return (
            <Container sx={{ m: 1 }}>
                <TextField
                    id="search"
                    type="search"
                    label="Search Patient by Name/Id"
                    sx={{ width: 1 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Container>
        );
    }
}

export default SearchPatient;