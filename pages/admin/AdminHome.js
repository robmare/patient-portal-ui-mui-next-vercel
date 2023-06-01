import { Container, Typography } from "@mui/material";
import ManageMisureAdministration from "../../components/common/buttons/ManageMisureAdministration";
import OtherConfigurationAdministration from "../../components/common/buttons/OtherConfigurationAdministration";
import ResetPassword from "../../components/common/buttons/ResetPasswordAdministration";
import SelectLanguage from "../../components/common/buttons/SelectLanguage";
import AdminNav from "../../components/navBars/AdminNav";

const AdminHome = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >

      <AdminNav />

      <Typography>
        AdminHome
      </Typography>
      <ResetPassword />
      <SelectLanguage />
      <ManageMisureAdministration />
      <OtherConfigurationAdministration />
    </Container>
  );
};

export default AdminHome;
