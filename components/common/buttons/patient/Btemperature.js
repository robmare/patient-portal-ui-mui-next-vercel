import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Btemperature = () => {
  let misure = {
    id: null,
    type: "temperature",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'temperature'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Temperature
    </Button>
  );
};

export default Btemperature;
