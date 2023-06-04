import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SelectLanguage from '../../components/SelectLanguage';
import { langConfig } from '../../translations/config';
import ChangePalette from "../common/buttons/ChangePalette";
import Logout from "../common/buttons/Logout";
import Oadress from "../utility/patient/registry_data/output_data/Oadress";
import Oage from "../utility/patient/registry_data/output_data/Oage";
import Oname from "../utility/patient/registry_data/output_data/Oname";
import Osex from "../utility/patient/registry_data/output_data/Osex";
import Otelephone from "../utility/patient/registry_data/output_data/Otelephone";

function PatientNav() {
    const [main, setMain] = useState(true);
    const tConfig = langConfig;
    const { t } = useTranslation();

    return (
        <Accordion sx={{ verticalAlign: 'top', top: "0px", width: 1, position: 'absolute', alignItems: 'flex-start', zIndex: 'modal', height: 100 }}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box borderRadius={2} sx={{
                    p: 1,
                    width: 1,
                    height: 80,
                    backgroundColor: 'primary.dark',
                }}>
                    <Stack direction="row" spacing={2} sx={{
                        width: 1,
                    }}>
                        <div style={{ "width": "20%" }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" />
                        </div>
                        <div style={{ "width": "60%" }}>
                            <Typography variant="h6">
                                Mario Rossi
                            </Typography>
                            <Typography variant="button" >
                                ID: xxxxxxx
                            </Typography>
                        </div>
                        <div style={{ "width": "10%", margin: "2%" }} >
                            <SelectLanguage />
                        </div>
                    </Stack>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box
                    role="presentation"
                >
                    <Box sx={{ alignItems: 'flex-end' }}>
                        <ChangePalette sx={{ ml: 15 }} />
                    </Box>
                    <List sx={{ p: 1 }}>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpeg" />
                            <Oname />
                        </Stack>
                        <Divider />
                        <Oage />
                        <Osex />
                        <Divider />
                        <Oadress />
                        <Otelephone />
                    </List>

                    <List sx={{ alignItems: 'center', m: 1 }}>
                        <Divider />
                        <Logout />
                    </List>
                </Box>
            </AccordionDetails>
        </Accordion >
    );
}

export default PatientNav;