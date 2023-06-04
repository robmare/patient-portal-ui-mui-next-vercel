import KeyIcon from '@mui/icons-material/Key';
import { Button, Link } from "@mui/material";
import * as React from 'react';

const ChangePassword = () => {
  return (
    <Button disabled startIcon={<KeyIcon />} component={Link} to="/PatientHome"
      sx={{ width: 1, mt: 1 }} style={{ justifyContent: "flex-start" }} variant="contained" color="primary">
      Change Password
    </Button>
  );
};

export default ChangePassword;