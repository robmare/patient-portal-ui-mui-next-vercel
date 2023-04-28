import React from "react";
import Passwordless from 'supertokens-auth-react/recipe/passwordless';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import { redirectToAuth } from 'supertokens-auth-react';
import { Typography, Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PatientNav from "../components/navBars/patientNav";

//////////////////////////////////////
export default function ProtectedPage({ userId }) {
    const theme = useTheme();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const session = useSessionContext()
  
    async function logoutClicked() {
      await Passwordless.signOut()
      redirectToAuth();
    }
  
    if (session.loading === true) {
      return null;
    }
    
    return (
      <div>
        <PatientNav />
  
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
  
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Accordion sx={{ width: 1 }}>
            <AccordionSummary sx={{ bgcolor: "#b25977", color:'#fff' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel_annsca-content"
              id="panel_annsca-header">
              <Typography>Annunci/Scadenze HOME</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Annunci/ScadenzeAnnunci/ScadenzeAnnunci/Scadenze
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: 1 }}>
            <AccordionSummary sx={{ bgcolor: "#626eb2", color:'#fff' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel_visite-content"
              id="panel_visite-header"
            >
              <Typography>Visite</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                VisiteVisiteVisite
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: 1 }}>
            <AccordionSummary sx={{ bgcolor: "#74b2a4", color:'#fff' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel_esami-content"
              id="panel_esami-header"
            >
              <Typography>Esami</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                EsamiEsamiEsami
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: 1 }}>
            <AccordionSummary sx={{ bgcolor: "#b2b262", color:'#fff' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel_pagamenti-content"
              id="panel_pagamenti-header"
            >
              <Typography>Pagamenti</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                PagamentiPagamentiPagamenti
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: 1 }}>
            <AccordionSummary sx={{ bgcolor: "#a359b0", color:'#fff' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel_ricoveri-content"
              id="panel_ricoveri-header"
            >
              <Typography>Ricoveri</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                RicoveriRicoveriRicoveri
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: 1 }}>
            <AccordionSummary sx={{ bgcolor: "#b26e59", color:'#fff' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel_vaccinazioni-content"
              id="panel_vaccinazioni-header"
            >
              <Typography>Vaccinazioni</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                VaccinazioniVaccinazioniVaccinazioni
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ width: 1 }}>
            <AccordionSummary sx={{ bgcolor: "#5997b2", color:'#fff' }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel_terapie-content"
              id="panel_terapie-header"
            >
              <Typography>Terapie</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                TerapieTerapieTerapie
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </div>
    );
  }
  