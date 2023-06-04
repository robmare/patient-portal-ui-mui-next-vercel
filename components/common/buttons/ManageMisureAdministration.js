import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { Button, Link } from "@mui/material";
import * as React from 'react';

const ManageMisureAdministration = () => {
  return (
    <Button startIcon={<LeaderboardIcon />} component={Link} to="/AdministrationManageMisure"
      sx={{ width: 1, mt: 1, mb: 2 }}
      variant="contained"
      style={{ justifyContent: "flex-start" }}
      color="primary">
      Manage Misure
    </Button>
  );
};

export default ManageMisureAdministration;