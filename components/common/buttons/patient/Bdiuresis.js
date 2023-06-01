import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bdiuresis = () => {
  let misure = {
    id: null,
    type: "diuresis",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'diuresis'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Diuresis
    </Button>
  );
};

export default Bdiuresis;
