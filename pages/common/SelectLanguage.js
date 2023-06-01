import * as React from 'react';
import { Typography, Container } from "@mui/material";
import AdministrationNav from "../../components/navBars/AdministrationNav";
import Ichange_language from "../../components/utility/common/input_data/Ichange_language";
import Save from "../../components/common/buttons/Save";
import GoHomeAdministration from "../../components/common/buttons/GoHomeAdministration";

const SelectLanguage = () => {
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
        Seleziona Lingua
      </Typography>
      <Ichange_language />
      <Save />
    </Container>
  );
};

export default SelectLanguage;
