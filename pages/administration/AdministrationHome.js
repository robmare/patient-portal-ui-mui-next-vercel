import * as React from 'react';
import { Typography, Container } from "@mui/material";
import AdministrationNav from "../../components/navBars/AdministrationNav";
import ResetPassword from "../../components/common/buttons/ResetPasswordAdministration";
import SelectLanguage from "../../components/common/buttons/SelectLanguage";
import ManageMisureAdministration from "../../components/common/buttons/ManageMisureAdministration";
import OtherConfigurationAdministration from "../../components/common/buttons/OtherConfigurationAdministration";

const AdministrationHome = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >

      <AdministrationNav />

      <Typography>
        AdministrationHome
      </Typography>
      <ResetPassword />
      <SelectLanguage />
      <ManageMisureAdministration />
      <OtherConfigurationAdministration />
    </Container>
  );
};

export default AdministrationHome;
