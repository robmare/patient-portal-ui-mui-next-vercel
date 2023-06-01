import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bheight = () => {
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: "height"
    }}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Height
    </Button>
  );
};

export default Bheight;
