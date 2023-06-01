import { Box, Button, Container, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import * as React from 'react';
import PatientNav from "./../../components/navBars/PatientNav";
import PatientSmartNav from "./../../components/navBars/PatientSmartNav";

const PatientHome = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <PatientNav />
      <Box sx={{ mt: 14, width: 1 }}>
        <PatientSmartNav page={'PatientHome'} />
      </Box>
      <Button component={Link} to="/PatientMeasurements" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Measurements
      </Button>
      <Button component={Link} to="/PatientVisits" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Visits
      </Button>
      <Button component={Link} to="/PatientAdsDeadlines" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Ads/Deadliness
      </Button>
      <Button component={Link} to="/PatientExams" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Exams
      </Button>
      <Button component={Link} to="/PatientHospitalizations" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Hospitalizations
      </Button>
      <Button component={Link} to="/PatientPayments" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Payments
      </Button>
      <Button component={Link} to="/PatientTherapies" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Therapies
      </Button>
      <Button component={Link} to="/PatientVaccinations" sx={{ width: 1, mt: 1 }} variant="contained" color="primary">
        Vaccinations
      </Button>
    </Container>
  );
};
export default PatientHome;
