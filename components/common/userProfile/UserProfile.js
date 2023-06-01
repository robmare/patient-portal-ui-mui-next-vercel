import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import * as React from 'react';
import ChangePassword from "../../common/buttons/ChangePassword";
import Logout from "../../common/buttons/Logout";
import ManageProfile from "../../common/buttons/ManageProfile";
import Oadress from "../../utility/patient/registry_data/output_data/Oadress";
import Oname from "../../utility/patient/registry_data/output_data/Oname";
import Otelephone from "../../utility/patient/registry_data/output_data/Otelephone";

export default function UserProfile() {
  const [open, setOpen] = React.useState(false);

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ maxHeight: "90%", width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ p: 1 }}>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/doctor.jpeg" />
          <Oname />
        </Stack>
        <Divider />
        <Oadress />
        <Otelephone />
      </List>
      <List sx={{ alignItems: "center", m: 1 }}>
        <Divider />
        <ChangePassword />
        <ManageProfile />
        <Divider />
        <Logout />
      </List>
    </Box>
  );
  return (
    <div>
      {['top'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button startIcon={<AccountCircleIcon />} color="inherit" sx={{ width: 1, }} onClick={toggleDrawer(anchor, true)}>Profile</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}