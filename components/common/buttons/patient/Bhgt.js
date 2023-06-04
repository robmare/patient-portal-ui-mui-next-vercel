import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bhgt = () => {
  let misure = {
    id: null,
    type: "hgt",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'hgt'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Hgt
    </Button>
  );
};

export default Bhgt;
