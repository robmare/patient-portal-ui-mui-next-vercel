import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Button, Link } from "@mui/material";
import * as React from 'react';

const ManageProfile = () => {
  return (
    <Button disabled startIcon={<ManageAccountsIcon />} component={Link} to="/PatientHome"
      sx={{ width: 1, mt: 1 }}
      variant="contained"
      style={{ justifyContent: "flex-start" }}
      color="primary">
      Manage Profile
    </Button>
  );
};

export default ManageProfile;