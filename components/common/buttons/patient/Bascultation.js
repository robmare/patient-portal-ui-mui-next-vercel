import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bascultation = () => {
  let misure = {
    id: null,
    type: "ascultation",
  }
  return (
    <Button
      variant="outlined"
      component={Link}
      to={{
        pathname: '/PatientInsertMeasurements',
        type: 'asculation'
      }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Ascultation
    </Button>
  );
};

export default Bascultation;
