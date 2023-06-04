import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bheight = () => {
  let misure = {
    id: null,
    type: "height",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathnema: '/PatientInsertMeasurements',
      type: 'height'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Height Test
    </Button>
  );
};

export default Bheight;
