import React, { useState } from "react";
import Passwordless from 'supertokens-auth-react/recipe/passwordless';
import supertokensNode from 'supertokens-node';
import { backendConfig } from '../config/backendConfig';
import Session from 'supertokens-node/recipe/session';
import { SessionAuth, useSessionContext } from 'supertokens-auth-react/recipe/session';
import { redirectToAuth } from 'supertokens-auth-react';
import { Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../components/Logo";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DefTesttable from "../components/tables/defTesttable";
import PatientNav from "../components/navBars/patientNav";


export async function getServerSideProps(context: { req: any; res: any }) {
  // this runs on the backend, so we must call init on supertokens-node SDK
  supertokensNode.init(backendConfig())
  let session
  try {
    session = await Session.getSession(context.req, context.res, {
      overrideGlobalClaimValidators: async function () {
        return []
      },
    })
  } catch (err: any) {
    if (err.type === Session.Error.TRY_REFRESH_TOKEN) {
      return { props: { fromSupertokens: 'needs-refresh' } }
    } else if (err.type === Session.Error.UNAUTHORISED) {
      // this will force the frontend to try and refresh which will fail
      // clearing all cookies and redirecting the user to the login screen.
      return { props: { fromSupertokens: 'needs-refresh' } }
    }
    throw err
  }

  return {
    props: { userId: session.getUserId() },
  }
}

//////////////////////////////////////
function ProtectedPage({ userId }) {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const session = useSessionContext()

  async function logoutClicked() {
    await Passwordless.signOut()
    redirectToAuth()
  }

  if (session.loading === true) {
    return null
  }
  
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
      <Box sx={{ mb: 5, mt: -10 }}>
        <Logo />
      </Box>
      
      <PatientNav />

      <div className="fill"
        style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            color: "#333333",
            paddingTop: "10px",
            paddingBottom: "40px",
        }}>
          <div style={{ height: "10px" }} />
            Your user ID is {userId}
          <div />
      </div>
      <div
        style={{
          display: 'flex',
          height: '70px',
          alignItems: 'center',
          justifyContent: 'flex-end',
          paddingLeft: '75px',
          paddingRight: '75px',
        }}
      >
        <div
          onClick={logoutClicked}
          style={{
            display: 'flex',
            width: '116px',
            height: '42px',
            backgroundColor: '#000000',
            borderRadius: '10px',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 'bold',
          }}
        >
          SIGN OUT
        </div>
      </div>

      <div >
        <Accordion>
          <AccordionSummary sx={{ mt: 2, bgcolor: 'info.main' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Annuncia
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>3 Nuovi Annunci</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <DefTesttable />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ mt: 1, bgcolor: 'warning.main' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Visite </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              1 Visita programmata
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
              varius pulvinar diam eros in elit. Pellentesque convallis laoreet
              laoreet.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ mt: 1, bgcolor: 'info.main' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Esamiiiiiissssssiiiiddddda
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              -
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            sx={{ mt: 1, bgcolor: 'info.main' }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Pagamenti</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
              amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Container>
  );
}

export default function Home(props: { userId: any }) {
  return (
    <SessionAuth>
        <ProtectedPage userId={props.userId} />
    </SessionAuth>
  )
}