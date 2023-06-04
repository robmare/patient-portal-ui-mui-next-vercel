import { Box } from "@mui/material";
import { useRouter, withRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import { appInfo } from '../config/appInfo';
import AdminHome from "./admin/AdminHome";
import AdministrationHome from "./administration/AdministrationHome";
import DoctorHome from "./doctor/DoctorHome";
import PatientHome from "./patient/PatientHome";

function ProtectedPage(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [isLogged, setIsLogged] = useState(props.router.query.auth);
  const router = useRouter();

  useEffect(() => {
    setIsLogged(props.router.query.auth && props.router.query.auth !== "");
    if (!isLogged) router.push(appInfo.websiteDomain + 'login');
  }, [isLogged]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        {
          isLogged ? (
            props.router.query.auth == "Admin" ? (
              <AdminHome />
            ) : props.router.query.auth == "Administration" ? (
              <AdministrationHome />
            ) : props.router.query.auth == "Doctor" ? (
              <DoctorHome />
            ) : props.router.query.auth == "Patient" ? (
              <PatientHome />
            ) :
              <PatientHome />
          ) : <></>
        }
      </Box>
    </div>
  );
}

export default withRouter(ProtectedPage);
