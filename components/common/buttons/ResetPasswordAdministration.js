import PasswordIcon from '@mui/icons-material/Password';
import { Button, Link } from "@mui/material";
import * as React from 'react';

const ResetPasswordAdministration = () => {
  return (
    <Button startIcon={<PasswordIcon />} component={Link} to="/AdministrationResetPassword" sx={{ width: 1, mt: 1 }} style={{ justifyContent: "flex-start" }} variant="contained" size="large" color="primary">
      Reset Password
    </Button>
  );
};

export default ResetPasswordAdministration;