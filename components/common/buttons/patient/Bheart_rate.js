import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bheart_rate = () => {
  let misure = {
    id: null,
    type: "heart_rate",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'heart_rate'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Heart rate
    </Button>
  );
};

export default Bheart_rate;
