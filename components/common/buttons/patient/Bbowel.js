import { Link } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';

const Bbowel = () => {
  let misure = {
    id: null,
    type: "bowel",
  }
  return (
    <Button variant="outlined" component={Link} to={{
      pathname: '/PatientInsertMeasurements',
      type: 'bowel'
    }}
      state={misure}
      fullWidth
      sx={{
        height: "6em",
      }}
      color="primary"
      aria-label="insert"
      size="large">
      Bowel
    </Button>
  );
};

export default Bbowel;