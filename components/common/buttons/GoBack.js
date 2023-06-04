import * as React from 'react';
import { useRouter } from "next/router";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import Fab from '@mui/material/Fab';

const GoBack = () => {
  const router = useRouter();

  return (
    <Fab 
    color="primary"
    aria-label="add"
    size="small"
      onClick={() => router.GoBack()}
    >
      <ArrowBackIosNewOutlinedIcon color="inherit" />
    </Fab>
  );
};

export default GoBack;