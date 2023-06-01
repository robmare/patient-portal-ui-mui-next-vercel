import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link } from '@mui/material';
import Fab from '@mui/material/Fab';
import * as React from 'react';

const GoHomePatient = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      to="/PatientHome"
      component={Link}
    >
      <HomeOutlinedIcon color="inherit" />
    </Fab>
  );
};

export default GoHomePatient;