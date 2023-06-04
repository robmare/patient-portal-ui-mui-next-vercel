import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { Button, Link } from "@mui/material";
import * as React from 'react';

const OtherConfigurationAdministration = () => {
  return (
    <Button startIcon={<ManageAccountsIcon />} component={Link} to="/AdministrationOtherConfiguration"
      sx={{ width: 1, mt: 1, mb: 2 }}
      variant="contained"
      style={{ justifyContent: "flex-start" }}
      color="primary">
      Other Configuration
    </Button>
  );
};

export default OtherConfigurationAdministration;