import * as React from 'react';
import { Container } from "@mui/material";
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";
import { styled } from '@mui/material/styles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

const PatientAdsDeadlines = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <PatientSmartNav page={'PatientAdsDeadlines'} />
    </Container>
  );
};

export default PatientAdsDeadlines;
