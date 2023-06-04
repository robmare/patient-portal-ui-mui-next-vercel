import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Link } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

const GoHomeAdministration = () => {
  return (
    <IconButton component={Link} to="/AdministrationHome" style={{ justifyContent: "flex-start" }} color="primary" aria-label="insert" size="large">
      <ArrowCircleLeftIcon fontSize="inherit" />
    </IconButton>
  );
};

export default GoHomeAdministration;