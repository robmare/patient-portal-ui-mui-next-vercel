import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Button, Link } from "@mui/material";

const Logout = () => {
  return (
    <Button startIcon={<ExitToAppIcon />} component={Link} to="/logout"
      sx={{ width: 1, mt: 1, mb: 2 }}
      variant="contained"
      style={{ justifyContent: "flex-start" }}
      color="primary">
      Log out
    </Button>
  );
};

export default Logout;