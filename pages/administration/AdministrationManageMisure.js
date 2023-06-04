import * as React from 'react';
import { Typography, Container } from "@mui/material";
import AdministrationNav from "../../components/navBars/AdministrationNav";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";

const AdministrationManageMisure = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        flex: 1,
        height: "100vh",
      }}
    >

      <AdministrationNav />
      <GoHomeAdministration />
      <Typography>
        AdministrationManageMisure
      </Typography>

    </Container>
  );
};

export default AdministrationManageMisure;
