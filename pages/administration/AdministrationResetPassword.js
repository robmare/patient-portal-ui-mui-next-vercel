import * as React from 'react';
import { Typography, Container } from "@mui/material";
import AdministrationNav from "../../components/navBars/AdministrationNav";
import Iuser_name from "../../components/utility/administration/input_data/Iuser_name";
import Iuser_password from "../../components/utility/administration/input_data/Iuser_password";
import Save from "../../components/common/buttons/Save";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";

const AdministrationResetPassword = () => {
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
        AdministrationResetPassword
      </Typography>
      <Iuser_name />
      <Iuser_password />
      <Save />
    </Container>
  );
};

export default AdministrationResetPassword;
