import TranslateIcon from '@mui/icons-material/Translate';
import { Button, Link } from "@mui/material";
import * as React from 'react';

const SelectLanguage = () => {
  return (
    <Button startIcon={<TranslateIcon />} component={Link} to="/SelectLanguage" sx={{ width: 1, mt: 1 }} style={{ justifyContent: "flex-start" }} variant="contained" size="large" color="primary">
      Select Language
    </Button>
  );
};

export default SelectLanguage;