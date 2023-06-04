import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bpressure = () => {
  let misure = {
    id: null,
    type: "pressure",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'pressure'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Pressure
    </Button>
  );
};

export default Bpressure;
