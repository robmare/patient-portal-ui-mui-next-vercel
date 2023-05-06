import React from "react";
import { Typography, Box } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProtectedPage({ userId }) {
    const [expanded, setExpanded] = React.useState(false);

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
  