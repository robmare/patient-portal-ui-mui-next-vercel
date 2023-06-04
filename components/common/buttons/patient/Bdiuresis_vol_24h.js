import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bdiuresis_vol_24h = () => {
  let misure = {
    id: null,
    type: "diuresis_vol_24h",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'diuresis_vol_24h'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Diuresis vol 24h
    </Button>
  );
};

export default Bdiuresis_vol_24h;
