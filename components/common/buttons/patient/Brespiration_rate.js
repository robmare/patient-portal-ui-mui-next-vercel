import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Brespiration_rate = () => {
  let misure = {
    id: null,
    type: "respiration_rate",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'respiration_rate'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Respiration rate
    </Button>
  );
};

export default Brespiration_rate;
