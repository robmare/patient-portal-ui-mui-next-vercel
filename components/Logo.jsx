import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{
      my: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box component="img" src="/static/icon_logo.png" alt="logo" />
    </Box>
  );
};

export default Logo;
