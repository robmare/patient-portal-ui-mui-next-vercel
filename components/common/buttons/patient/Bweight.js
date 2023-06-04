import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bweight = () => {
  let misure = {
    id: null,
    type: "weight",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'weight'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Weight
    </Button>
  );
};

export default Bweight;