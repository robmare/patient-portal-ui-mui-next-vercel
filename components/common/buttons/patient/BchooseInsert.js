import AddIcon from '@mui/icons-material/Add';
import { Link } from '@mui/material';
import Fab from '@mui/material/Fab';
import * as React from 'react';

const BchooseInsert = () => {
  return (
    <Fab
      color="primary"
      aria-label="add"
      size="small"
      component={Link} to={{
        pathname: '/PatientChooseMeasurements',
      }}
    >
      <AddIcon color="inherit" />
    </Fab>
  );
};

export default BchooseInsert;