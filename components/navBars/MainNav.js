import { useState, useEffect } from 'react';
import Passwordless from 'supertokens-auth-react/recipe/passwordless';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import { useSessionContext } from 'supertokens-auth-react/recipe/session';
import Session from 'supertokens-auth-react/recipe/session';
import SuperTokensReact from 'supertokens-auth-react';
import * as SuperTokensConfig from '../../config/frontendConfig';
import { useRouter } from 'next/router';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Logo from '../Logo';
import SelectLanguage from '../SelectLanguage';

import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChooseInsertPatientDataModal from "../modals/ChooseInsertPatientDataModal";
import VisualPatientDataModal from "../modals/VisualPatientDataModal";
import { appInfo } from '../../config/appInfo';

const options = ['Sign-In with Phone Number and OTP Code via SMS', 'Sign-In with Phone Number and Password', 'Sign-In with Email Address and OTP Code', 'Sign-In with Email Address and Password'];

export default function MainNav () {
    const session = useSessionContext();
    const [loggedIn, setLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function checkLoggedIn() {
            if (await Session.doesSessionExist()) {
                setLoggedIn(true);
            } 
        }
        checkLoggedIn();
    });
    
    async function logoutClicked() {
        await Passwordless.signOut().then(() => EmailPassword.signOut()).then(() => {
            setLoggedIn(false);
            router.push(appInfo.websiteDomain + 'login');
        });
    }
  
    if (session.loading === true) {
      return null;
    }

    if (typeof window !== 'undefined') {
        SuperTokensReact.init(SuperTokensConfig.frontendConfig());
    }
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        <Logo />
                    </Typography>
                    
                    <Typography style={{
                            display: (loggedIn) ? 'inline' : 'none'
                        }}>
                        <VisualPatientDataModal />
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    
                    <div
                        style={{
                            display: (loggedIn) ? 'flex' : 'none',
                            height: '70px',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            paddingLeft: '75px',
                            paddingRight: '75px',
                        }}>
                        <ChooseInsertPatientDataModal />

                        <IconButton
                            variant="outlined"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 1, mr: 5 }}
                            href="/PatientAgenda">
                            <CalendarMonthIcon color="inherit" />
                        </IconButton>
                    
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
                            }}>
                            SIGN OUT
                        </div>
                    </div>

                    <SelectLanguage />
                </Toolbar>
            </AppBar>
        </Box>
    );
}