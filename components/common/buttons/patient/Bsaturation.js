import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bsaturation = () => {
  let misure = {
    id: null,
    type: "saturation",
  }
  return (
    <Button variant="outlined" component={Link} to={
      {
        pathname: '/PatientInsertMeasurements',
        type: 'saturation'
      }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Saturation
    </Button>
  );
};

export default Bsaturation;
