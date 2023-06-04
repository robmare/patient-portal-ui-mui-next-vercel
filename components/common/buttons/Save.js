import SaveIcon from '@mui/icons-material/Save';
import { Button } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useRouter } from "next/router";
import * as React from 'react';

const Save = () => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const clickSave = event => {
    setOpen(true);
    setTimeout(() => router.GoBack(), 1500);
  };

  return (
    <><Button onClick={clickSave} startIcon={<SaveIcon />} sx={{ width: 1, mt: 1 }} style={{ justifyContent: "flex-start" }} variant="contained" size="large" color="primary">
      Save
    </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  );
};

export default Save;